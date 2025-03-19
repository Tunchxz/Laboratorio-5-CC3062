const body = document.body

body.style.margin = "0"
body.style.padding = "0"
body.style.boxSizing = "border-box"

// Crear y estilizar los frames 1-8
const frame1 = document.createElement('div')

frame1.style.display = "flex"
frame1.style.flexDirection = "column"
frame1.style.height = "100dvh"
frame1.style.width = "100dvw"

const frame2 = document.createElement('div')

frame2.style.display = "flex"
frame2.style.justifyContent = "space-between"
frame2.style.alignItems = "center"
frame2.style.height = "15dvh"
frame2.style.width = "100dvw"
frame2.style.borderBottom = "3px solid grey"

const frame3 = document.createElement('div')

frame3.style.display = "flex"
frame3.style.height = "85dvh"
frame3.style.width = "100dvw"

const frame4 = document.createElement('div')

frame4.style.display = "flex"
frame4.style.height = "100%"
frame4.style.width = "30dvw"
frame4.style.borderRight = "2px solid grey"
frame4.style.backgroundColor = "#e6e8fe"

const frame5 = document.createElement('div')

frame5.style.display = "flex"
frame5.style.flexDirection = "column"
frame5.style.height = "100%"
frame5.style.width = "70dvw"

const frame6 = document.createElement('div')

frame6.style.display = "flex"
frame6.style.justifyContent = "center"
frame6.style.alignItems = "center"
frame6.style.height = "15dvh"
frame6.style.width = "100%"
frame6.style.gap = "5%"
frame6.style.borderBottom = "2px solid #ebebeb"

const frame7 = document.createElement('div')

frame7.style.display = "flex"
frame7.style.justifyContent = "center"
frame7.style.alignItems = "center"
frame7.style.height = "70dvh"
frame7.style.width = "100%"
frame7.style.overflowY = "auto"

const frame8 = document.createElement('div')

frame8.style.display = "flex"
frame8.style.justifyContent = "center"
frame8.style.alignItems = "center"
frame8.style.height = "15dvh"
frame8.style.width = "100%"
frame8.style.gap = "2%"
frame8.style.borderTop = "3px solid #ebebeb"

// Añadir los Frames 1-8 al HTML
body.appendChild(frame1)
frame1.appendChild(frame2)
frame1.appendChild(frame3)
frame3.appendChild(frame4)
frame3.appendChild(frame5)
frame5.appendChild(frame6)
frame5.appendChild(frame7)
frame5.appendChild(frame8)

// Crear y estilizar el frame de Principal (Top Bar)
const frame_title = document.createElement('div')

frame_title.style.display = "flex"
frame_title.style.alignItems = "center"
frame_title.style.height = "100%"
frame_title.style.width = "75dvw"

const frame_user = document.createElement('div')

frame_user.style.display = "flex"
frame_user.style.justifyContent = "space-around"
frame_user.style.alignItems = "center"
frame_user.style.height = "100%"
frame_user.style.width = "30dvw"
frame_user.style.background = "linear-gradient(to right, #585fcf, #8b93f7)"

const title = document.createElement('h1')

title.textContent = "WEBCHAT"
title.style.fontFamily = "Lucida Console"
title.style.fontWeight = "bold"
title.style.paddingLeft = "5%"

// Añadir los Frames Title y User al HTML
frame2.appendChild(frame_title)
frame2.appendChild(frame_user)
frame_title.appendChild(title)

// Crear y estilizar el Frame que contiene el Grupo
const frame_group = document.createElement('div')

frame_group.style.display = "flex"
frame_group.style.justifyContent = "space-around"
frame_group.style.alignItems = "center"
frame_group.style.height = "15dvh"
frame_group.style.width = "100%"
frame_group.style.background = "linear-gradient(to right, #585fcf, #8b93f7)"

// Añadir el Frame Group al HTML
frame4.appendChild(frame_group)


// Crear y estilizar la foto del frame Perfil
const profile_picture = document.createElement('div')

profile_picture.style.display = "flex"
profile_picture.style.justifyContent = "center"
profile_picture.style.alignItems = "center"
profile_picture.style.height = "75px"
profile_picture.style.width = "75px"
profile_picture.style.borderRadius = "100%"
profile_picture.style.backgroundColor = "white"

const letter_profile_picture = document.createElement('p')

letter_profile_picture.textContent = "ST"
letter_profile_picture.style.fontFamily = "Lucida Console"
letter_profile_picture.style.fontSize = "24px"
letter_profile_picture.style.fontWeight = "bold"

// Añadir la foto de perfil al Frame de User en HTML
profile_picture.appendChild(letter_profile_picture)
frame_user.appendChild(profile_picture)

// Crear y estilizar el texto del frame Perfil
const frame_username = document.createElement('div')

frame_username.style.display = "flex"
frame_username.style.alignItems = "center"
frame_username.style.height = "100%"
frame_username.style.width = "50%"

const username = document.createElement('p')

username.textContent = "Sebas Túnchez Conectado"
username.style.fontFamily = "Lucida Console"
username.style.color = "white"

// Añadir la foto de perfil al Frame de User en HTML
frame_username.appendChild(username)
frame_user.appendChild(frame_username)

// Crear y estilizar la foto del Grupo en la sección "Chats"
const group_picture = document.createElement('div')

group_picture.style.display = "flex"
group_picture.style.justifyContent = "center"
group_picture.style.alignItems = "center"
group_picture.style.height = "70px"
group_picture.style.width = "70px"
group_picture.style.borderRadius = "100%"
group_picture.style.backgroundColor = "white"

const letter_group_picture = document.createElement('p')

letter_group_picture.textContent = "Web"
letter_group_picture.style.fontFamily = "Lucida Console"
letter_group_picture.style.fontSize = "18px"
letter_group_picture.style.fontWeight = "bold"

// Añadir la foto del grupo al Frame de Group en HTML
group_picture.appendChild(letter_group_picture)
frame_group.appendChild(group_picture)

// Crear y estilizar el texto del frame Group
const frame_groupname = document.createElement('div')

frame_groupname.style.display = "flex"
frame_groupname.style.alignItems = "center"
frame_groupname.style.height = "100%"
frame_groupname.style.width = "50%"

const groupname = document.createElement('p')

groupname.textContent = "Sistemas y Tecnologías Web - Sección 20"
groupname.style.fontFamily = "Lucida Console"
groupname.style.color = "white"
groupname.style.fontSize = "14px"

// Añadir el nombre del grupo al Frame de Group en HTML
frame_groupname.appendChild(groupname)
frame_group.appendChild(frame_groupname)

// Crear y estilizar el frame de encabezado de Chat
const frame_groupname_chat = document.createElement('div')

frame_groupname_chat.style.display = "flex"
frame_groupname_chat.style.justifyContent = "space-between"
frame_groupname_chat.style.alignItems = "center"
frame_groupname_chat.style.height = "100%"
frame_groupname_chat.style.width = "90%"

const group_picture_chat = document.createElement('div')

group_picture_chat.style.display = "flex"
group_picture_chat.style.height = "60px"
group_picture_chat.style.width = "60px"
group_picture_chat.style.borderRadius = "100%"
group_picture_chat.style.backgroundColor = "lightgrey"

const groupname_chat = document.createElement('p')

groupname_chat.textContent = "Sistemas y Tecnologías Web"
groupname_chat.style.fontFamily = "Lucida Console"
groupname_chat.style.fontWeight = "bold"
groupname_chat.style.fontSize = "16px"
groupname_chat.style.textAlign = "center"

// Botón para Cambiar Tema
const toggle = document.createElement('div')

toggle.classList.add('toggle')
toggle.style.position = "relative"
toggle.style.height = "45px"
toggle.style.width = "90px"
toggle.style.borderRadius = "100px"
toggle.style.background = "linear-gradient(to right, rgb(88, 95, 207), rgb(139, 147, 247))"
toggle.style.cursor = "pointer"
toggle.addEventListener("click", () => applyTheme())

// Estilo personalizado (CSS rules) para Toggle
const toggle_before = document.createElement('style');

toggle_before.textContent = `
      .toggle::before {
      content: "";
      position: absolute;
      height: 30px;
      width: 30px;
      background: white;
      border-radius: 50%;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      transition: all 0.3s ease-in-out;
    }
    `

// Estilo personalizado (CSS rules) para Toggle Active
const toggle_active_before = document.createElement('style');

toggle_active_before.textContent = `
      .toggle.active::before {
      background-color: #e5b91a;
      left: calc(100% - 30px - 10px);
    }
    `
// Función para aplicar el tema cundo ocurra el Event en Toggle
function applyTheme() {
    toggle.classList.toggle("active")

    if (toggle.classList.contains("active")) {
        toggle.style.background = "#191c25"
        frame2.style.backgroundColor = "#212121"
        frame2.style.borderBottom = "3px solid #3a3a3a"
        title.style.color = "white"
        frame4.style.backgroundColor = "#2f2f2f"
        frame4.style.borderRight = "2px solid #3a3a3a"
        frame7.style.backgroundColor = "#212121"
        groupname_chat.style.color = "white"
        frame6.style.backgroundColor = "#303030"
        frame6.style.borderBottom = "2px solid #3a3a3a"
        frame8.style.backgroundColor = "#303030"
        frame8.style.borderTop = "3px solid #3a3a3a"
        frame_user.style.background = "linear-gradient(to right, #1c2a56, #2f3e8b)"
        frame_group.style.background = "linear-gradient(to right, #1c2a56, #2f3e8b)"
        text_input.style.borderColor = "#5f5f5f"
        text_input.style.color = "#cfcfcf"
        text_input.style.caretColor = "#7f7f7f"
        card.style.background = 'linear-gradient(to right, #1c2a56, #2f3e8b)'

        messages_styles.textContent = `
        .otherUser {
          align-self: flex-start;
          max-width: 60%;
          font-family: "Lucida Console", monospace;
          font-size: 12px;
          line-height: 1.5;
          padding: 15px;
          color: white;
          background-color: #202c36;
          border-radius: 15px;
        }
        .myUser {
          align-self: flex-end;
          max-width: 60%;
          font-family: "Lucida Console", monospace;
          font-size: 12px;
          line-height: 1.5;
          right: 0;
          padding: 15px;
          color: white;
          background-color: #1c2a56;
          border-radius: 15px;
        }
      `

        // El tema seleccionado se guarda como 'dark'
        localStorage.setItem("mode", "dark")
    }
    else {
        toggle.style.background = "linear-gradient(to right, rgb(88, 95, 207), rgb(139, 147, 247))"
        frame2.style.background = "none"
        frame2.style.borderBottom = "3px solid grey"
        title.style.color = "initial"
        frame4.style.backgroundColor = "#e6e8fe"
        frame4.style.borderRight = "2px solid grey"
        frame7.style.background = "none"
        groupname_chat.style.color = "initial"
        frame6.style.background = "none"
        frame6.style.borderBottom = "2px solid #ebebeb"
        frame8.style.background = "none"
        frame8.style.borderTop = "3px solid #ebebeb"
        frame_user.style.background = "linear-gradient(to right, #585fcf, #8b93f7)"
        frame_group.style.background = "linear-gradient(to right, #585fcf, #8b93f7)"
        text_input.style.borderColor = "#c1c1c1"
        text_input.style.color = "#3f3f3f"
        text_input.style.caretColor = "#a1a1a1"
        card.style.background = 'linear-gradient(to right, #585fcf, #8b93f7)'
        messages_styles.textContent = messages_css

        // El tema seleccionado se guarda como 'light'
        localStorage.setItem("mode", "light")
    }
}

// Función para aplicar el último tema seleccionado por el usuario
function initialTheme() {
    if (localStorage.getItem("mode") == "dark") {
        applyTheme()
    }
}

// Añadir los estilos personalizados al Head del HTML
document.head.appendChild(toggle_before)
document.head.appendChild(toggle_active_before)

// Añadir los elementos del encabezado del Chat al HTML (en frame6)
frame_groupname_chat.appendChild(group_picture_chat)
frame_groupname_chat.appendChild(groupname_chat)
frame_groupname_chat.appendChild(toggle)
frame6.appendChild(frame_groupname_chat)

// Crear y Estilizar el Cuadro de Texto
const text_input = document.createElement('textarea');

text_input.style.width = "70%"
text_input.style.height = "28%"
text_input.style.resize = "none"
text_input.style.border = "1"
text_input.style.borderRadius = "10px"
text_input.style.borderColor = "#c1c1c1"
text_input.style.padding = "12px"
text_input.style.fontFamily = "Lucida Console"
text_input.style.color = "#3f3f3f"
text_input.style.fontSize = "14px"
text_input.style.lineHeight = "1.5"
text_input.style.outline = "none"
text_input.style.caretColor = "#a1a1a1"
text_input.style.background = "none"
text_input.placeholder = "Escribe tu mensaje aquí"
text_input.maxLength = "140"
text_input.addEventListener('input', function () {
    // Verifica que el mensaje no exceda los 140 caracteres
    if (text_input.value.length >= 140) {
        alert("¡Has alcanzado el límite de caracteres!");
    }
})
text_input.addEventListener('keydown', async function (event) {
    // Si el usuario presiona Enter sin Shift
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault()
        await drawInput()
        text_input.value = ""
        await drawMessages()
        setTimeout(() => {
            frame7.scrollTop = text_input.scrollHeight
        }, 0)
    }

    // Si el usuario presiona Shift + Enter
    if (event.key === 'Enter' && event.shiftKey) {
        setTimeout(() => {
            text_input.scrollTop = text_input.scrollHeight
        }, 0)
    }
})

// Aplicar CSS para el placeholder
const text_input_placeholder = document.createElement('style')

text_input_placeholder.textContent = `
  textarea::placeholder {
    color: #aaaaaa; /* Aquí defines el color del placeholder */
  }
`

// Añadir los estilos personalizados al Head del HTML
document.head.appendChild(text_input_placeholder);

// Añadir el Cuadro de Texto al Frame 8.
frame8.appendChild(text_input)

// Crear el Botón de "Enviar"
const card = document.createElement('div')
card.classList.add('card')

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svg.setAttribute('viewBox', '0 0 512 512')
svg.classList.add('paperplane')

const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
path.setAttribute('d', 'M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z');

card.style.display = 'flex'
card.style.justifyContent = 'center'
card.style.alignItems = 'center'
card.style.width = '10%'
card.style.height = '50%'
card.style.background = 'linear-gradient(to right, #585fcf, #8b93f7)'
card.style.borderRadius = '10px'
card.addEventListener('click', async function () {
    await drawInput()
    text_input.value = ""
    await drawMessages()
    setTimeout(() => {
        frame7.scrollTop = text_input.scrollHeight
    }, 0)
})

const card_paperplane = document.createElement('style')

card_paperplane.textContent = `
  .card:hover .paperplane {
    transform: scale(1.07) translateY(-10%) rotate(18deg);
  }

  .paperplane {
    fill: #ffffff;
    width: 25%;
    transition: 0.5s all;
  }
`

// Añadir los estilos personalizados al Head del HTML
document.head.appendChild(card_paperplane);

// Añadir el path al SVG, el SVG al Botón, y el botón al frame8
svg.appendChild(path)
card.appendChild(svg)
frame8.appendChild(card)

// Crear y estilizar el contenedor de mensajes
const chat_container = document.createElement('ul')

chat_container.style.display = "flex"
chat_container.style.flexDirection = "column"
chat_container.style.gap = "15px"
chat_container.style.height = "100%"
chat_container.style.width = "95%"
chat_container.style.margin = "0"
chat_container.style.padding = "0"
chat_container.style.listStyleType = "none"

// Añadir el contenedor de mensajes al frame7
frame7.appendChild(chat_container)

// Estilizar los Mensajes
const messages_styles = document.createElement('style')

messages_css = `
        .otherUser {
          align-self: flex-start;
          max-width: 60%;
          font-family: "Lucida Console", monospace;
          font-size: 12px;
          line-height: 1.5;
          padding: 15px;
          color: black;
          background-color: #f0f0f0;
          border-radius: 15px;
        }
        .myUser {
          align-self: flex-end;
          max-width: 60%;
          font-family: "Lucida Console", monospace;
          font-size: 12px;
          line-height: 1.5;
          right: 0;
          padding: 15px;
          color: white;
          background-color: #5a3cff;
          border-radius: 15px;
        }
      `

messages_styles.textContent = messages_css

// Añadir los estilos personalizados al Head del HTML
document.head.appendChild(messages_styles)

// Obtener los mensajes
const getMessages = async () => {
    const response = await fetch('https://chat.calicheoficial.lat/messages')
    return await response.json()
}

// Publicar un mensaje
const postMessage = async (message) => {
    const body = JSON.stringify(message)
    const response = await fetch(
        'https://chat.calicheoficial.lat/messages',
        {
            method: 'POST',
            body
        }
    )
    return await response.json()
}

// Pintar los mensajes en el contenedor
const drawMessages = async () => {
    const messages = await getMessages()

    messages.forEach((message) => {
        const chat_message = document.createElement('li')

        const user = document.createElement('span')
        user.append(`${message.user}: `)

        const text = document.createElement('span')
        text.append(message.text)

        if (message.user == "Sebas Tunchez") {
            chat_message.classList.add("myUser")
        } else {
            chat_message.classList.add("otherUser")
        }

        chat_message.append(user)
        chat_message.append(text)

        chat_container.append(chat_message)
    })
}

const drawInput = async () => {
    console.log('onclick')
    const message = {
        text: text_input.value,
        user: 'Sebas Tunchez'
    }
    postMessage(message)
}

// Función para Responsiveness
function handleResize() {
    if (window.innerWidth <= 500) {
        frame4.style.display = "none"
        frame_username.style.display = "none"
        frame5.style.width = "100%"
        groupname_chat.textContent = "Sistemas y..."

    } else {
        frame4.style.display = "flex"
        frame5.style.width = "70dvw"
        frame_username.style.display = "flex"
        groupname_chat.textContent = "Sistemas y Tecnologías Web"
    }
}

// Detectar cambio de tamaño de pantalla
window.addEventListener('resize', handleResize)

// Actualizar los mensajes cad 5 segundos
setInterval(async () => {
    await drawMessages();
}, 5000);

// Ejecutar al cargar la página
handleResize()
initialTheme()