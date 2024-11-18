document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        
        // Confirmation Message
        alert('Thank you! Your transcript application has been submitted successfully.');
        
        // Prepare PDF Content
        const formData = new FormData(form);
        let pdfContent = `
            <h1 style="text-align: center; color: rgb(18, 158, 238);">Jahangirnagar University</h1>
            <p style="text-align: center; color:rgb(18, 158, 238);">Savar,Dhaka</p>
            <table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
            <tr>
                <td align="center" valign="middle">
                <img src="./Photos/juLogo.png" alt="Ju-Logo">
                </td>
            </tr>
        </table>
            <h2 style="text-align: center; color: green;">Transcript Application Form</h2>
            <p><strong>01.Applicant's Full Name:</strong> ${formData.get('full-name')}</p>
            <p><strong>02.Student ID Number:</strong> ${formData.get('student-id')}</p>
            <p><strong>03.Department/Institute:</strong> ${formData.get('department')}</p>
            <p><strong>04.Gender:</strong> ${formData.get('Gender')}</p>
            <p><strong>05.Batch Number:</strong> ${formData.get('batch')}</p>
            <p><strong>06.Year of Admission:</strong> ${formData.get('admission-year')}</p>
            <p><strong>07.Year of Graduation (Expected/Completed):</strong> ${formData.get('graduation-year')}</p>
            <p><strong>08.Purpose of Transcript Request:</strong> ${formData.get('purpose')}</p>
            <p><strong>09.Contact Information (Phone Number):</strong> ${formData.get('contact')}</p>
            <p><strong>10.Email Address:</strong> ${formData.get('email')}</p>
            <p><strong>11.Transcript Delivery Option:</strong> ${formData.get('delivery-option')}</p>
            <p><strong>12.Additional Instructions:</strong> ${formData.get('additional-instructions') || 'N/A'}</p>
        `;

        // Generate PDF using html2pdf.js
        const pdfContainer=document.createElement('div');
        pdfContainer.innerHTML=pdfContent;
        //pdfContainer.style.fontFamily = 'Arial, sans-serif';
        pdfContainer.style.fontFamily='Times New Roman';
        pdfContainer.style.lineHeight='1';
        pdfContainer.style.margin='8px';

        html2pdf()
            .set({
                margin: 1,
                filename: 'Transcript_Application_Form.pdf',
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            })
            .from(pdfContainer)
            .save();

        // Reset the form after submission
        form.reset();
    });
});
