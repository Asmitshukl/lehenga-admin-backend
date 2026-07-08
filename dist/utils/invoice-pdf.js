import PDFDocument from "pdfkit";
function asNumber(value) {
    return Number(value ?? 0);
}
function money(value) {
    return `Rs ${asNumber(value).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
}
function formatDate(value) {
    if (!value) {
        return "Not set";
    }
    return new Intl.DateTimeFormat("en-IN", {
        dateStyle: "medium",
    }).format(new Date(value));
}
function formatDateTime(value) {
    if (!value) {
        return "Not set";
    }
    return new Intl.DateTimeFormat("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(new Date(value));
}
function writePair(document, label, value, x, y, width = 220) {
    document.font("Helvetica-Bold").fontSize(9).fillColor("#34302d").text(label, x, y, { width });
    document.font("Helvetica").fillColor("#55504b").text(value, x, y + 13, { width });
}
function sectionTitle(document, title, y) {
    document
        .moveTo(40, y)
        .lineTo(555, y)
        .strokeColor("#d4c4b8")
        .lineWidth(1)
        .stroke();
    document.font("Helvetica-Bold").fontSize(11).fillColor("#2f2824").text(title, 40, y + 10);
}
export function buildInvoicePdf(invoice) {
    return new Promise((resolve, reject) => {
        const document = new PDFDocument({
            size: "A4",
            margin: 40,
            bufferPages: true,
        });
        const chunks = [];
        document.on("data", (chunk) => chunks.push(chunk));
        document.on("end", () => resolve(Buffer.concat(chunks)));
        document.on("error", reject);
        document
            .font("Helvetica-Bold")
            .fontSize(20)
            .fillColor("#2f2824")
            .text(invoice.businessName, 40, 38, { width: 300 });
        document.font("Helvetica").fontSize(9).fillColor("#55504b").text(invoice.businessAddress, 40, 66, { width: 280 });
        document.text([invoice.businessPhone, invoice.businessEmail].filter(Boolean).join(" | "), 40, 92, { width: 280 });
        document.font("Helvetica-Bold").fontSize(24).fillColor("#9f644c").text("Invoice", 390, 38, {
            width: 165,
            align: "right",
        });
        writePair(document, "Invoice No", invoice.invoiceNumber, 390, 75, 165);
        writePair(document, "Invoice Date", formatDate(invoice.invoiceDate), 390, 112, 165);
        writePair(document, "Order No", invoice.orderNumberSnapshot, 390, 149, 165);
        sectionTitle(document, "Customer", 190);
        writePair(document, "Name", invoice.customerName, 40, 218);
        writePair(document, "Phone", invoice.customerPhone, 230, 218, 140);
        writePair(document, "Email", invoice.customerEmail ?? "Not provided", 390, 218, 165);
        sectionTitle(document, "Rental Items", 270);
        let y = 300;
        document.font("Helvetica-Bold").fontSize(8).fillColor("#2f2824");
        document.text("Item", 40, y, { width: 185 });
        document.text("Dates", 230, y, { width: 110 });
        document.text("Qty", 345, y, { width: 30, align: "right" });
        document.text("Rate", 385, y, { width: 65, align: "right" });
        document.text("Rent", 465, y, { width: 90, align: "right" });
        y += 18;
        for (const item of invoice.lineItems) {
            if (y > 690) {
                document.addPage();
                y = 50;
            }
            const itemName = `${item.productNameSnapshot} (${item.skuSnapshot})`;
            const size = item.sizeLabelSnapshot ? `Size: ${item.sizeLabelSnapshot}` : "Size: Not set";
            document.font("Helvetica-Bold").fontSize(9).fillColor("#2f2824").text(itemName, 40, y, { width: 185 });
            document.font("Helvetica").fontSize(8).fillColor("#55504b").text(size, 40, y + 12, { width: 185 });
            document.text(`${formatDate(item.rentalStartDate)} to ${formatDate(item.rentalEndDate)}`, 230, y, { width: 110 });
            document.text(`${item.rentalDays} days`, 230, y + 12, { width: 110 });
            document.text(String(item.quantity), 345, y, { width: 30, align: "right" });
            document.text(money(item.rentalPricePerDay), 385, y, { width: 65, align: "right" });
            document.text(money(item.lineTotal), 465, y, { width: 90, align: "right" });
            y += 36;
        }
        sectionTitle(document, "Charges", y + 8);
        y += 38;
        const charges = [
            ["Rental fee", invoice.rentalFee],
            ["Security deposit (refundable)", invoice.securityDeposit],
            ["Dry cleaning", invoice.dryCleaningCharge],
            ["Alterations", invoice.alterationCharge],
            ["Delivery", invoice.deliveryCharge],
            ["Other charges", invoice.otherCharge],
            ["Discount", -asNumber(invoice.discountAmount)],
            ["Total payable now", invoice.totalPayable],
            ["Amount paid", invoice.amountPaid],
            ["Balance due", invoice.balanceDue],
        ];
        for (const [label, value] of charges) {
            document.font(label === "Total payable now" ? "Helvetica-Bold" : "Helvetica").fontSize(9).fillColor("#2f2824");
            document.text(label, 330, y, { width: 120 });
            document.text(money(value), 465, y, { width: 90, align: "right" });
            y += 16;
        }
        if (y > 620) {
            document.addPage();
            y = 50;
        }
        sectionTitle(document, "Payment & Rental Terms", y + 8);
        y += 38;
        writePair(document, "Payment", `${invoice.paymentStatus} | ${invoice.paymentMode ?? "Not recorded"}`, 40, y, 220);
        writePair(document, "Return Date & Time", formatDateTime(invoice.returnDateTime), 300, y, 220);
        y += 50;
        writePair(document, "Late Return Fee", invoice.lateFeePolicy, 40, y, 240);
        writePair(document, "Condition Notes", invoice.conditionNotes ?? "No issue notes recorded", 300, y, 220);
        y += 58;
        writePair(document, "Damage/Loss Deduction Policy", invoice.damagePolicy, 40, y, 240);
        writePair(document, "Cancellation/Refund Policy", invoice.cancellationPolicy, 300, y, 220);
        y += 72;
        document.font("Helvetica").fontSize(9).fillColor("#55504b");
        document.text(`Created by: ${invoice.createdByAdmin?.name ?? "Admin"}`, 40, y);
        document.text(`Customer acknowledgement: ${invoice.acknowledgementName ?? "________________________"}`, 300, y);
        document.moveTo(300, y + 28).lineTo(555, y + 28).strokeColor("#9f8f84").stroke();
        document.end();
    });
}
//# sourceMappingURL=invoice-pdf.js.map