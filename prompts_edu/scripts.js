


document.addEventListener('DOMContentLoaded', function() {
const dropdown = document.getElementById('themeDropdown');
    dropdown.addEventListener('change', function() {
        const selectedTheme = this.value;
        const prompts = document.querySelectorAll('.prompt-item');
        
        if (selectedTheme === 'none') {
            prompts.forEach(prompt => {
                prompt.style.display = 'none';
            });
        } else {
            prompts.forEach(prompt => {
                const promptTheme = prompt.getAttribute('data-theme');
                if (selectedTheme === 'all' || promptTheme === selectedTheme) {
                    prompt.style.display = 'block';
                } else {
                    prompt.style.display = 'none';
                }
            });
        }
    });

// Leer el archivo CSV y llenar la página con los datos usando Papa Parse
    Papa.parse('prompts.csv', {
        download: true,
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function(results) {
            const contentDiv = document.getElementById('content');
            const dropdown = document.getElementById('themeDropdown'); // Acceder al desplegable
            let currentTopic = '';
            let themes = new Set();  // Para almacenar temas únicos

            results.data.forEach((row, index) => {
                // Añadir temas al conjunto de temas únicos
                themes.add(row['Tema']);

                const promptDiv = document.createElement('div');  // Nuevo contenedor div para cada prompt
                promptDiv.className = 'prompt-item';  // Añadir la clase
                promptDiv.setAttribute('data-theme', row['Tema']);  // Añadir el atributo data-theme
                promptDiv.style.display = 'none';

                if (row['Tema'] !== currentTopic) {
                    currentTopic = row['Tema'];
                    const topicHeader = document.createElement('h2');
                    topicHeader.textContent = "Tema: " + currentTopic;
                    promptDiv.appendChild(topicHeader);  // Añadir al contenedor div en lugar de contentDiv
                }

                const titleElement = document.createElement('p');
                titleElement.className = 'title-element';  // Añadir la clase CSS
                titleElement.textContent = "Título: " + row['Título'];
                promptDiv.appendChild(titleElement);  // Añadir al contenedor div en lugar de contentDiv

                const descriptionElement = document.createElement('p');
                descriptionElement.className = 'description-element'; 
                descriptionElement.textContent = "Descripción: " + row['Descripcion'];
                promptDiv.appendChild(descriptionElement);  // Añadir al contenedor div en lugar de contentDiv

                const textarea = document.createElement('textarea');
                textarea.id = 'textarea-' + index;
                textarea.textContent = row['Prompt_cast'];
                promptDiv.appendChild(textarea);  // Añadir al contenedor div en lugar de contentDiv

                const copyButton = document.createElement('button');
                copyButton.textContent = "Copiar";
                copyButton.onclick = () => copyTextToClipboard('textarea-' + index);
                promptDiv.appendChild(copyButton);  // Añadir al contenedor div en lugar de contentDiv

                contentDiv.appendChild(promptDiv);  // Finalmente, añadir el contenedor div al contentDiv
            });

            
// Count the occurrences of each theme
let themeCounts = {};
results.data.forEach((row) => {
    let theme = row['Tema'];
    if (!themeCounts[theme]) {
        themeCounts[theme] = 0;
    }
    themeCounts[theme]++;
});


// Calculate the total count of all themes
let totalCount = 0;
for (let count of Object.values(themeCounts)) {
    totalCount += count;
}
document.querySelector('#themeDropdown option[value="all"]').textContent = "Todos (" + totalCount + ")";
// Add themes with their counts to the dropdown
themes.forEach(theme => {
    const option = document.createElement('option');
    option.value = theme;
    option.textContent = theme + " (" + themeCounts[theme] + ")";
    dropdown.appendChild(option);
});

        }
    });

});
