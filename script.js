// ========================================
// CONFIGURACIÓN DE PLANILLAS
// ========================================
// Aquí puedes modificar tus planillas: nombre, URL, icono y color

const sheets = [
    {
        id: 'juveniles_lumi_vi',
        name: 'JUVENILES LU-MI-VI',
        url: 'https://docs.google.com/spreadsheets/d/1S0pPUKqU_y1oYRZ61M1A1zibMW-dl9F7gjUXqiRNxX8/edit?gid=1527763868#gid=1527763868',
        icon: '🏃‍♂️',
        color: 'green'
    },
    {
        id: 'juveniles_ma_ju',
        name: 'JUVENILES MA-JU',
        url: 'https://docs.google.com/spreadsheets/d/1F6IfoV0P6fMOEXwjD7sFHhklYux4rGOsZtdgW2UVi6I/edit?gid=779516056#gid=779516056',
        icon: '🏃‍♂️',
        color: 'green'
    },
    {
        id: 'taller_11',
        name: 'TALLERES JUVENILES SEPTIEMBRE',
        url: 'https://docs.google.com/spreadsheets/d/1Yp_k-drBkETBPAo6f2T0wlwiFv5Nxk-S33zTQfMKEsM/edit?gid=1905494563#gid=1905494563',
        icon: '🎸',
        color: 'green'
    },
        {
        id: 'taller_12',
        name: 'TENIS DE MESA SEPTIEMBRE',
        url: 'https://docs.google.com/spreadsheets/d/1Yp_k-drBkETBPAo6f2T0wlwiFv5Nxk-S33zTQfMKEsM/edit?gid=1905494563#gid=1905494563',
        icon: '🏓',
        color: 'green'
    },
    {
        id: 'piscina_adulto_mayor1',
        name: 'PISCINA ADULTO MAYOR LU-MI-VI',
        url: 'https://docs.google.com/spreadsheets/d/1wRjHDOwQXBX7Dh3rnaAyFQhqg4DoV4S6v6O0L6Ff7UA/edit?gid=753207085#gid=753207085',
        icon: '🤽‍♂️',
        color: 'red'
    },
    {
        id: 'piscina_adulto_mayor2',
        name: 'PISCINA ADULTO MAYOR MA-JU',
        url: 'https://docs.google.com/spreadsheets/d/1nS6vb5dccvRAuq8kMIH2UJ2swxN9OF3igHhSyEL6IK8/edit?gid=753207085#gid=753207085',
        icon: '🤽‍♂️',
        color: 'red'
    },
    {
        id: 'piscina_adulto_mayor3',
        name: 'HIDROGIMNASIA LU-MI-VI',
        url: 'https://docs.google.com/spreadsheets/d/1FKZePlBnkFgzr_Cd86ZFZcjCbtkL-6Jdx6EtIxPh76I/edit?gid=753207085#gid=753207085',
        icon: '🤽‍♂️',
        color: 'red'
    }
    ,
    {
        id: 'cea_1_sep',
        name: 'CEA SEPTIEMBRE LU-MI-VI',
        url: 'https://docs.google.com/spreadsheets/d/1LMHNrKdlu54MtyY6_50dQkuLkPrQHllLVcMsu46I0Os/edit?gid=753207085#gid=753207085',
        icon: '🧑‍⚕️',
        color: 'indigo'
    },
    {
        id: 'cea_2_sep', 
        name: 'CEA SEPTIEMBRE MA-JU',
        url: 'https://docs.google.com/spreadsheets/d/1fRynEyWnbCu4RNc1bCtUu7-pBytHnnW81HGDa_8JR1k/edit?gid=753207085#gid=753207085',
        icon: '🧑‍⚕️',
        color: 'indigo'
    }
    ,
     {
        id: 'cea_1_oct',
        name: 'CEA OCTUBRE LU-MI-VI',
        url: 'https://docs.google.com/spreadsheets/d/1Wa6uetUZ3ioAJEcLQ_Qg12EA_vR8YEgy3KnDVOGxzvg/edit?gid=495214978#gid=495214978',
        icon: '🧑‍⚕️',
        color: 'indigo'
    },
    {
        id: 'cea_2_oct', 
        name: 'CEA OCTUBRE MA-JU',
        url: 'https://docs.google.com/spreadsheets/d/1rxs7T74gB3KamjWkaEfjtYkN724L--6CV7yhnyM7Tdo/edit?gid=753207085#gid=753207085',
        icon: '🧑‍⚕️',
        color: 'indigo'
    },
    {
        id: 'taller_1',
        name: 'TALLERES ADULTOS AGOSTO',
        url: 'https://docs.google.com/spreadsheets/d/1Wst19lm_vedHDEeDGjO1I9Qivw0xovZ0kYR8T8juCAk/edit?gid=1400478010#gid=1400478010',
        icon: '🪗',
        color: 'indigo'
    },
    {
        id: 'taller_2',
        name: 'TALLERES ADULTOS SEPTIEMBRE',
        url: 'https://docs.google.com/spreadsheets/d/1UYzTOcuvq21BgtoDsGHMcmkgwX-ELnVx4yHwizlu8t4/edit?gid=582939919#gid=582939919',
        icon: '🎺',
        color: 'indigo'
    }
    ,
    {
        id: 'menores_1',
        name: 'NIÑOS(AS) GIMN Y PISC 3 VECES POR SEMANA',
        url: 'https://docs.google.com/spreadsheets/d/1Yn6v1pkkuEQAUxCNaQCorp_nw4tx91UhEk8TQBFq3SA/edit?gid=753207085#gid=753207085',
        icon: '👧',
        color: 'yellow'
    }
    ,
    {
        id: 'menores_2',
        name: 'NIÑOS(AS) MARTES-JUEVES',
        url: 'https://docs.google.com/spreadsheets/d/1vZzCyzIapnIzxhzFO5CpZhIHnX-0z0UHn9INN4cNLcY/edit?gid=753207085#gid=753207085',
        icon: '👧',
        color: 'yellow'
    },
    {
        id: 'menores_7',
        name: 'NIÑOS(AS) SOLO SABADO',
        url: 'https://docs.google.com/spreadsheets/d/1K578FmkVO8IbDSmpLOMn8E1rSJX-dAeIy_j6Fw5msEw/edit?gid=753207085#gid=753207085',
        icon: '👧',
        color: 'yellow'
    }
    ,
    {
        id: 'menores_3',
        name: 'NIÑOS(AS) PRE-ESCOLARES SABADO NATACIÓN',
        url: 'https://docs.google.com/spreadsheets/d/1_EtB9GeZgVaFT_3reG-nJvtZGZQAxAuvBMkFLa8Lhq8/edit?gid=753207085#gid=753207085',
        icon: '👧',
        color: 'yellow'
    }
    ,
    {
        id: 'menores_4',
        name: 'INFANTES NATACIÓN SABADO',
        url: 'https://docs.google.com/spreadsheets/d/1H7HroHYLv2gUgFdlgnUBZIkQMcj_b067N9sOwVxxVwg/edit?gid=753207085#gid=753207085',
        icon: '👶',
        color: 'yellow'
    }
     ,
    {
        id: 'menores_5',
        name: 'AFTER SCHOOL 2025',
        url: 'https://docs.google.com/spreadsheets/d/1jIyRjF2QKtuZ-kzsDQ-CsFKlt7dCP42xWxo16q_6k6E/edit?gid=0#gid=0',
        icon: '👶',
        color: 'yellow'
    }
    ,
    {
        id: 'menores_6',
        name: 'PERSONAS NEURODIVERGENTES',
        url: 'https://docs.google.com/spreadsheets/d/1gn53qWyQ1P-ah8RtI1-uJQH3hSl9WIilwMBPzwG0JSA/edit?gid=1477174191#gid=1477174191',
        icon: '👨🏻‍🦯',
        color: 'yellow'
    }
    ,
    {
        id: 'marciales_1',
        name: 'WADO LU-MI-VI',
        url: 'https://docs.google.com/spreadsheets/d/1QSoq_IMr4iJc-TyyBIyKHTVne2KflMqLtktOzBSCKg4/edit?gid=753207085#gid=753207085',
        icon: '🥋',
        color: 'teal'
    }
    ,
        {
        id: 'marciales_2',
        name: 'TAEKWONDO LU-MI',
        url: 'https://docs.google.com/spreadsheets/d/1cQTvFeKKBozd5Y_uTOc1_xU5EIpssMXmRAQRw7Jyhb8/edit?pli=1&gid=131310860#gid=131310860',
        icon: '🥋',
        color: 'teal'
    }
    ,
    {
        id: 'marciales_3',
        name: 'TAEKWONDO MA-JU',
        url: 'https://docs.google.com/spreadsheets/d/1VDSvbkLsjfWn_Usrr9ehaQ8S-SfPN_wi44L6fk4ByHs/edit?gid=967268150#gid=967268150',
        icon: '🥋',
        color: 'teal'
    }




];

// ========================================
// VARIABLES GLOBALES
// ========================================

let openTabs = new Map();
let currentSearchTerm = ''; // Variable para mantener el término de búsqueda actual

// ========================================
// FUNCIONES PRINCIPALES
// ========================================

function generateSheetHTML(sheet, isOpen = false) {
    const statusText = isOpen ? 'Abierta' : 'Cerrada';
    const statusClass = isOpen ? 'open' : '';
    const boxClass = isOpen ? 'active' : '';
    
    return `
        <div class="sheet-box ${boxClass}" data-id="${sheet.id}" onclick="openSheet('${sheet.id}', '${sheet.url}', '${sheet.name}')">
            <div class="sheet-icon color-${sheet.color}">${sheet.icon}</div>
            <div class="sheet-title">${sheet.name}</div>
            <div class="sheet-status ${statusClass}">${statusText}</div>
        </div>
    `;
}

function renderSheets() {
    const container = document.getElementById('menuContainer');
    let html = '';
    
    sheets.forEach(sheet => {
        const isOpen = openTabs.has(sheet.id);
        html += generateSheetHTML(sheet, isOpen);
    });
    
    html += `
        <div class="sheet-box add-sheet" onclick="addNewSheet()">
            <div class="add-icon">➕</div>
            <div>Agregar Nueva Planilla</div>
        </div>
    `;
    
    container.innerHTML = html;
    updateStats();
    
    // Aplicar filtro de búsqueda después de renderizar
    applySearchFilter();
}

function applySearchFilter() {
    if (currentSearchTerm) {
        const boxes = document.querySelectorAll('.sheet-box:not(.add-sheet)');
        
        boxes.forEach(box => {
            const title = box.querySelector('.sheet-title').textContent.toLowerCase();
            if (title.includes(currentSearchTerm.toLowerCase())) {
                box.classList.remove('hidden');
            } else {
                box.classList.add('hidden');
            }
        });
    }
}

function openSheet(id, url, name) {
    if (url === '#') {
        alert('URL no configurada para esta planilla');
        return;
    }

    // Marcar como opening para animación
    const box = document.querySelector(`[data-id="${id}"]`);
    box.classList.add('opening');
    
    // Intentar enfocar pestaña existente o abrir nueva
    if (openTabs.has(id)) {
        try {
            const existingTab = openTabs.get(id);
            existingTab.focus();
            console.log(`Enfocando pestaña existente: ${name}`);
        } catch (e) {
            // Si falla, la pestaña puede haber sido cerrada
            openNewTab(id, url, name);
        }
    } else {
        openNewTab(id, url, name);
    }

    // Remover animación
    setTimeout(() => {
        box.classList.remove('opening');
    }, 500);
}

function openNewTab(id, url, name) {
    try {
        // Configuración específica para pantalla 1920 x 1080
        // Ocupa mitad derecha completa de la pantalla
        const windowFeatures = [
            'width=850',        // Mitad del ancho (1920 ÷ 2)
            'height=1050',      // Alto completo menos barra de tareas (~40px)
            'left=960',         // Desde el centro hacia la derecha
            'top=0',            // Desde la parte superior
            'resizable=yes',
            'scrollbars=yes',
            'status=no',
            'menubar=no',
            'toolbar=no',
            'location=yes'
        ].join(',');
        
        console.log(`Abriendo ventana en mitad derecha (1920x1080): ${windowFeatures}`);
        
        // Usar un nombre específico para la ventana
        const newTab = window.open(url, `sheet_${id}`, windowFeatures);
        
        if (newTab) {
            openTabs.set(id, newTab);
            console.log(`Abriendo nueva pestaña: ${name}`);
            
            // Verificar si la pestaña se cierra
            const checkClosed = setInterval(() => {
                if (newTab.closed) {
                    openTabs.delete(id);
                    updateTabStatus(id);
                    clearInterval(checkClosed);
                    console.log(`Pestaña cerrada: ${name}`);
                }
            }, 1000);
        } else {
            alert('No se pudo abrir la pestaña. Verifica que los popups estén habilitados.');
        }
    } catch (e) {
        console.error('Error al abrir pestaña:', e);
        // Fallback: abrir en nueva pestaña normal
        window.open(url, '_blank');
    }
    
    updateTabStatus(id);
}

// Ejemplos de uso con diferentes configuraciones:

// Uso básico (usa configuración por defecto)
// openNewTab(1, 'https://example.com', 'Mi Pestaña');

// Ventana pequeña en esquina superior derecha
// openNewTab(2, 'https://example.com', 'Ventana Pequeña', {
//     width: 800,
//     height: 600,
//     left: window.screen.width - 820,  // 20px del borde derecho
//     top: 20
// });

// Ventana centrada en la pantalla
// openNewTab(3, 'https://example.com', 'Ventana Centrada', {
//     width: 1000,
//     height: 700,
//     left: (window.screen.width - 1000) / 2,
//     top: (window.screen.height - 700) / 2
// });

// Ventana maximizada (casi pantalla completa)
// openNewTab(4, 'https://example.com', 'Ventana Grande', {
//     width: window.screen.availWidth - 100,
//     height: window.screen.availHeight - 100,
//     left: 50,
//     top: 50
// });

// Función auxiliar para obtener configuraciones predefinidas
function getWindowPreset(preset) {
    const presets = {
        small: {
            width: 800,
            height: 600,
            left: 100,
            top: 100
        },
        medium: {
            width: 1200,
            height: 800,
            left: 200,
            top: 100
        },
        large: {
            width: 1600,
            height: 1000,
            left: 50,
            top: 50
        },
        centered: {
            width: 1200,
            height: 800,
            left: (window.screen.width - 1200) / 2,
            top: (window.screen.height - 800) / 2
        },
        topRight: {
            width: 800,
            height: 600,
            left: window.screen.width - 820,
            top: 20
        }
    };
    
    return presets[preset] || presets.medium;
}

function updateTabStatus(id) {
    // Actualizar solo el estado visual de una pestaña específica sin re-renderizar todo
    const box = document.querySelector(`[data-id="${id}"]`);
    if (box) {
        const isOpen = openTabs.has(id);
        const statusElement = box.querySelector('.sheet-status');
        
        if (isOpen) {
            statusElement.textContent = 'Abierta';
            statusElement.className = 'sheet-status open';
            box.classList.add('active');
        } else {
            statusElement.textContent = 'Cerrada';
            statusElement.className = 'sheet-status';
            box.classList.remove('active');
        }
    }
    updateStats();
}

function refreshOpenTabs() {
    // Verificar estado de todas las pestañas
    const closedTabs = [];
    
    openTabs.forEach((tab, id) => {
        if (tab.closed) {
            closedTabs.push(id);
        }
    });
    
    // Remover pestañas cerradas y actualizar estado
    closedTabs.forEach(id => {
        openTabs.delete(id);
        updateTabStatus(id);
    });
    
    // Solo animar el botón refresh, no re-renderizar todo
    const btn = document.querySelector('.refresh-btn');
    if (btn) {
        btn.style.transform = 'scale(1.2) rotate(360deg)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 300);
    }
}

function updateStats() {
    const total = sheets.length;
    const open = openTabs.size;
    document.getElementById('statsDisplay').textContent = 
        `Total: ${total} planillas | Abiertas: ${open}`;
}

function addNewSheet() {
    const name = prompt('Nombre de la nueva planilla:');
    if (name) {
        const url = prompt('URL de la planilla:');
        if (url) {
            const icon = prompt('Icono (emoji) para la planilla:') || '📋';
            const color = prompt('Color (green, blue, red, purple, orange, teal, indigo, pink, cyan, lime, deep-orange, yellow):') || 'green';
            
            const id = 'sheet_' + Date.now();
            sheets.push({
                id: id,
                name: name,
                url: url,
                icon: icon,
                color: color
            });
            renderSheets();
            
            // Guardar en localStorage para persistencia
            localStorage.setItem('ymca_sheets', JSON.stringify(sheets));
        }
    }
}

function clearSearch() {
    currentSearchTerm = '';
    document.getElementById('searchInput').value = '';
    const boxes = document.querySelectorAll('.sheet-box:not(.add-sheet)');
    boxes.forEach(box => {
        box.classList.remove('hidden');
    });
}

// ========================================
// FUNCIONALIDAD DE BÚSQUEDA MEJORADA
// ========================================

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function(e) {
        currentSearchTerm = e.target.value.trim();
        applySearchFilter();
    });
    
    // Limpiar búsqueda con Escape
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            clearSearch();
        }
    });
}

// ========================================
// PERSISTENCIA DE DATOS
// ========================================

function loadSavedSheets() {
    const savedSheets = localStorage.getItem('ymca_sheets');
    if (savedSheets) {
        try {
            const parsed = JSON.parse(savedSheets);
            // Asegurar que todas las planillas tengan color
            parsed.forEach(sheet => {
                if (!sheet.color) {
                    sheet.color = 'green'; // Color por defecto
                }
            });
            sheets.length = 0; // Limpiar array actual
            sheets.push(...parsed); // Cargar planillas guardadas
        } catch (e) {
            console.error('Error cargando planillas guardadas:', e);
        }
    }
}

// Actualiza estas dos funciones en tu JavaScript:

function generateSheetHTML(sheet, isOpen = false) {
    const statusText = isOpen ? 'Abierta' : 'Cerrada';
    const statusClass = isOpen ? 'open' : '';
    const boxClass = isOpen ? `active color-${sheet.color}` : ''; // Agregar clase de color
    
    return `
        <div class="sheet-box ${boxClass}" data-id="${sheet.id}" onclick="openSheet('${sheet.id}', '${sheet.url}', '${sheet.name}')">
            <div class="sheet-icon color-${sheet.color}">${sheet.icon}</div>
            <div class="sheet-title">${sheet.name}</div>
            <div class="sheet-status ${statusClass}">${statusText}</div>
        </div>
    `;
}

function updateTabStatus(id) {
    // Actualizar solo el estado visual de una pestaña específica sin re-renderizar todo
    const box = document.querySelector(`[data-id="${id}"]`);
    if (box) {
        const isOpen = openTabs.has(id);
        const statusElement = box.querySelector('.sheet-status');
        
        // Obtener el color de la planilla
        const sheet = sheets.find(s => s.id === id);
        const colorClass = sheet ? `color-${sheet.color}` : '';
        
        if (isOpen) {
            statusElement.textContent = 'Abierta';
            statusElement.className = 'sheet-status open';
            box.className = `sheet-box active ${colorClass}`; // Aplicar color específico
        } else {
            statusElement.textContent = 'Cerrada';
            statusElement.className = 'sheet-status';
            box.className = 'sheet-box'; // Remover clases activas
        }
    }
    updateStats();
}
// ========================================
// INICIALIZACIÓN
// ========================================

// Cargar planillas guardadas al iniciar
window.addEventListener('load', function() {
    loadSavedSheets();
    renderSheets();
    initSearch();
});

// Verificar pestañas periódicamente (SIN re-renderizar)
setInterval(refreshOpenTabs, 5000);

// Inicializar inmediatamente
renderSheets();