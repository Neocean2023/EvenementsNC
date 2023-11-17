import streamlit as st

def load_html(file_name):
    with open(file_name, 'r', encoding='utf-8') as file:
        return file.read()

# Vous pouvez ajouter autant de fichiers HTML que vous le souhaitez
html_content1 = load_html('index copie.html')
#html_content2 = load_html('chemin/vers/votre/fichier2.html')

# Affichage du contenu HTML dans l'application Streamlit
st.markdown(html_content1, unsafe_allow_html=True)
#st.markdown(html_content2, unsafe_allow_html=True)
