import mammoth

def convert_docx_to_html(docx_file_path):
    with open(docx_file_path, "rb") as docx_file:
        result = mammoth.convert_to_html(docx_file)
        html = result.value  # The generated HTML
        return html

# Path to your .docx file
docx_path = "bang-can-doi-ke-toan.docx"

# Convert and get HTML
html_content = convert_docx_to_html(docx_path)
print(html_content)
