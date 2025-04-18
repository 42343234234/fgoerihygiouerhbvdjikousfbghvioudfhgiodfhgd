const themeToggle = document.querySelector('.theme-toggle'),
  themePanel = document.querySelector('.theme-panel')
themeToggle.addEventListener('mouseenter', () => {
  themePanel.classList.add('active')
})
themePanel.addEventListener('mouseleave', () => {
  themePanel.classList.remove('active')
})
document.querySelectorAll('.theme-option').forEach((_0x49ea5c) => {
  _0x49ea5c.addEventListener('click', () => {
    document
      .querySelectorAll('.theme-option')
      .forEach((_0x3cfb2d) => _0x3cfb2d.classList.remove('active'))
    _0x49ea5c.classList.add('active')
    const _0x5448e1 = _0x49ea5c.getAttribute('data-theme')
    applyTheme(_0x5448e1)
  })
})
function applyTheme(_0xbbd756) {
  const _0x2e5c9a = document.documentElement
  switch (_0xbbd756) {
    case 'dark':
      _0x2e5c9a.style.setProperty('--main-color', '#ffffff'),
        (document.body.style.background = '#1a1a1a')
      break
    case 'neon':
      _0x2e5c9a.style.setProperty('--main-color', '#00ff00'),
        (document.body.style.backgroundColor = '#000000'),
        document.querySelectorAll('.theme-option').forEach((_0x532ebb) => {
          _0x532ebb.style.animation = 'glow 2s infinite'
        })
      break
    case 'gradient':
      ;(document.body.style.background =
        'linear-gradient(45deg, #ff6b6b, #4ecdc4)'),
        _0x2e5c9a.style.setProperty('--main-color', '#ffffff')
      break
    default:
      _0x2e5c9a.style.setProperty('--main-color', 'rgb(41, 41, 41)'),
        (document.body.style.backgroundColor = 'white'),
        document.querySelectorAll('.theme-option').forEach((_0x58ff32) => {
          _0x58ff32.style.animation = 'none'
        })
  }
}
var selector = document.querySelector('.selector_box')
selector.addEventListener('click', () => {
  selector.classList.contains('selector_open')
    ? selector.classList.remove('selector_open')
    : selector.classList.add('selector_open')
})
document.querySelectorAll('.date_input').forEach((_0x15e4ba) => {
  _0x15e4ba.addEventListener('click', () => {
    document.querySelector('.date').classList.remove('error_shown')
  })
})
var sex = 'm'
document.querySelectorAll('.selector_option').forEach((_0x2892b8) => {
  _0x2892b8.addEventListener('click', () => {
    sex = _0x2892b8.id
    document.querySelector('.selected_text').innerHTML = _0x2892b8.innerHTML
  })
})
var upload = document.querySelector('.upload')
document.querySelectorAll('.input_holder').forEach((_0x2356d7) => {
  var _0x3595eb = _0x2356d7.querySelector('.input')
  _0x3595eb.addEventListener('click', () => {
    _0x2356d7.classList.remove('error_shown')
  })
})
const input = document.querySelector('#image'),
  previewModal = document.querySelector('.image-preview-modal'),
  previewImage = document.querySelector('.preview-image'),
  closePreview = document.querySelector('.close-preview'),
  fileUpload = document.querySelector('#file-upload')
fileUpload.addEventListener('change', async (_0x240836) => {
  const _0x1e0af6 = _0x240836.target.files[0]
  if (!_0x1e0af6) {
    return
  }
  const _0x4fe1f5 = new FormData()
  _0x4fe1f5.append('image', _0x1e0af6)
  try {
    const _0x4451e9 = await fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: { Authorization: 'Client-ID cc8a9cbb22eb0ef' },
        body: _0x4fe1f5,
      }),
      _0x127022 = await _0x4451e9.json()
    _0x127022.success
      ? ((input.value = _0x127022.data.link),
        (previewImage.src = _0x127022.data.link),
        (previewModal.style.display = 'flex'))
      : alert('Błąd podczas przesyłania zdjęcia')
  } catch (_0x586c2f) {
    console.error('Error:', _0x586c2f)
    alert('Błąd podczas przesyłania zdjęcia')
  }
})
input.addEventListener('input', (_0x16cb58) => {
  const _0x3f0193 = _0x16cb58.target.value
  _0x3f0193.includes('imgur.com') &&
    (localStorage.removeItem('userImage'),
    input.setAttribute('selected', _0x3f0193),
    (previewImage.src = _0x3f0193),
    (previewModal.style.display = 'flex'))
})
closePreview.addEventListener('click', () => {
  previewModal.style.display = 'none'
})
previewModal.addEventListener('click', (_0x4c787b) => {
  _0x4c787b.target === previewModal && (previewModal.style.display = 'none')
})
const randomMaleSurnames = [
    'Kowalski',
    'Nowak',
    'Wiśniewski',
    'Wójcik',
    'Kowalczyk',
    'Kamiński',
    'Lewandowski',
    'Zieliński',
    'Szymański',
    'Woźniak',
  ],
  randomFemaleSurnames = [
    'Kowalska',
    'Nowak',
    'Wiśniewska',
    'Wójcik',
    'Kowalczyk',
    'Kamińska',
    'Lewandowska',
    'Zielińska',
    'Szymańska',
    'Woźniak',
  ],
  randomCities = [
    'Warszawa',
    'Kraków',
    'Łódź',
    'Wrocław',
    'Poznań',
    'Gdańsk',
    'Szczecin',
    'Bydgoszcz',
    'Lublin',
    'Katowice',
  ],
  randomStreets = [
    'Mickiewicza',
    'Słowackiego',
    'Kościuszki',
    'Piłsudskiego',
    'Sienkiewicza',
    'Reymonta',
    'Konopnickiej',
    'Prusa',
    'Wyspiańskiego',
  ]
function getRandomElement(_0xae304a) {
  return _0xae304a[Math.floor(Math.random() * _0xae304a.length)]
}
function generateRandomPostcode() {
  return (
    String(Math.floor(Math.random() * 90 + 10)) +
    '-' +
    String(Math.floor(Math.random() * 900 + 100))
  )
}
document.querySelector('.clear-btn').addEventListener('click', () => {
  document.querySelectorAll('.input_holder').forEach((_0x355e03) => {
    var _0x16aecd = _0x355e03.querySelector('.input')
    _0x16aecd.value = ''
  })
  document.querySelectorAll('.date_input').forEach((_0x8db370) => {
    _0x8db370.value = ''
  })
  localStorage.clear()
  localStorage.clear()
})
document.querySelector('.generate-btn').addEventListener('click', () => {
  document.querySelectorAll('.input_holder').forEach((_0x2010a8) => {
    var _0x1e4ba7 = _0x2010a8.querySelector('.input')
    let _0x32e158 = ''
    switch (_0x1e4ba7.id) {
      case 'surname':
        _0x32e158 =
          sex === 'm'
            ? getRandomElement(randomMaleSurnames)
            : getRandomElement(randomFemaleSurnames)
        break
      case 'nationality':
        _0x32e158 = 'POLSKA'
        break
      case 'familyName':
        _0x32e158 =
          sex === 'm'
            ? getRandomElement(randomMaleSurnames)
            : getRandomElement(randomFemaleSurnames)
        break
      case 'fathersFamilyName':
        _0x32e158 = getRandomElement(randomMaleSurnames)
        break
      case 'mothersFamilyName':
        _0x32e158 = getRandomElement(randomFemaleSurnames)
        break
      case 'birthPlace':
        _0x32e158 = getRandomElement(randomCities)
        break
      case 'countryOfBirth':
        _0x32e158 = 'POLSKA'
        break
      case 'adress1':
        _0x32e158 =
          'ul. ' +
          getRandomElement(randomStreets) +
          ' ' +
          Math.floor(Math.random() * 100 + 1)
        break
      case 'adress2':
        _0x32e158 = generateRandomPostcode()
        break
      case 'city':
        _0x32e158 = getRandomElement(randomCities)
        break
    }
    _0x32e158 && _0x1e4ba7.id !== 'name' && (_0x1e4ba7.value = _0x32e158)
  })
})
document.querySelector('.go').addEventListener('click', () => {
  var _0x926692 = [],
    _0x2e9d5d = new URLSearchParams()
  _0x2e9d5d.set('sex', sex)
  const _0x1aa964 = document.querySelector('#image')
  !_0x1aa964.value || !_0x1aa964.value.includes('imgur.com')
    ? (_0x926692.push(_0x1aa964.parentElement),
      _0x1aa964.parentElement.classList.add('error_shown'))
    : _0x2e9d5d.set('image', _0x1aa964.value)
  var _0x45b50c = '',
    _0x3a4386 = false
  document.querySelectorAll('.date_input').forEach((_0x701c12) => {
    _0x45b50c = _0x45b50c + '.' + _0x701c12.value
    isEmpty(_0x701c12.value) && (_0x3a4386 = true)
  })
  _0x45b50c = _0x45b50c.substring(1)
  if (_0x3a4386) {
    var _0x2f17c2 = document.querySelector('.date')
    _0x2f17c2.classList.add('error_shown')
    _0x926692.push(_0x2f17c2)
  } else {
    _0x2e9d5d.set('birthday', _0x45b50c)
  }
  document.querySelectorAll('.input_holder').forEach((_0x98ba2f) => {
    var _0x5b92b1 = _0x98ba2f.querySelector('.input')
    isEmpty(_0x5b92b1.value)
      ? (_0x926692.push(_0x98ba2f), _0x98ba2f.classList.add('error_shown'))
      : _0x2e9d5d.set(_0x5b92b1.id, _0x5b92b1.value)
  })
  _0x926692.length != 0 ? _0x926692[0].scrollIntoView() : forwardToId(_0x2e9d5d)
})
function isEmpty(_0x5182b9) {
  return /^\s*$/.test(_0x5182b9)
}
function forwardToId(_0x52181c) {
  const _0x424f6a = _0x52181c.get('image')
  _0x424f6a &&
    (localStorage.setItem('userImage', _0x424f6a), _0x52181c.delete('image'))
  document.querySelectorAll('.input_holder').forEach((_0x318fae) => {
    const _0xdd254 = _0x318fae.querySelector('.input')
    _0xdd254 &&
      _0xdd254.value &&
      localStorage.setItem(_0xdd254.id, _0xdd254.value)
  })
  location.href = './id.html?' + _0x52181c.toString()
}
window.addEventListener('load', () => {
  document.querySelectorAll('.input_holder').forEach((_0x4d1a8e) => {
    const _0x180c83 = _0x4d1a8e.querySelector('.input')
    _0x180c83 &&
      localStorage.getItem(_0x180c83.id) &&
      (_0x180c83.value = localStorage.getItem(_0x180c83.id))
  })
})
function sendTo(_0x324791) {
  switch (_0x324791) {
    case 'home':
      location.href = 'home.html'
      break
    case 'documents':
      location.href = 'documents.html'
      break
    case 'services':
      location.href = 'services.html'
      break
    case 'qr':
      location.href = 'qr.html'
      break
    case 'more':
      location.href = 'more.html'
      break
  }
}
var guide = document.querySelector('.guide_holder')
guide.addEventListener('click', () => {
  guide.classList.contains('unfolded')
    ? guide.classList.remove('unfolded')
    : guide.classList.add('unfolded')
})
