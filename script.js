function calculateGST() {
    const amount = parseFloat(document.getElementById('amount').value);
    const cgst = amount * 0.09;
    const sgst = amount * 0.09;
    const total_gst = cgst + sgst;
    const final_amount = amount + total_gst;
    document.getElementById('cgst').textContent = cgst.toFixed(2);
    document.getElementById('sgst').textContent = sgst.toFixed(2);
    document.getElementById('total_gst').textContent = total_gst.toFixed(2);
    document.getElementById('final_amount').textContent =Math.round(final_amount);
}