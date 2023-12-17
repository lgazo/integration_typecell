/**
 * SPDX-FileCopyrightText: 2018 John Molakvoæ <skjnldsv@protonmail.com>
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


// __webpack_nonce__ = btoa(OC.requestToken)
// __webpack_require__.p = OC.filePath('integration_typecell', 'js', '../build/') // put your own app id and build path here.
__webpack_require__.p = OC.filePath('integration_typecell', 'js', '') // put your own app id and build path here.
const script = document.querySelector('[nonce]')
__webpack_require__.nc = script.nonce || script.getAttribute('nonce')

import { generateFilePath } from '@nextcloud/router'

// import Vue from 'vue'
// import App from './App'
// import TypeCellWrapper from './TypeCellWrapper'

// // eslint-disable-next-line
// __webpack_public_path__ = generateFilePath(appName, '', 'js/')

// Vue.mixin({ methods: { t, n } })

// export default new Vue({
// 	el: '#content',
// 	render: h => h(TypeCellWrapper),
// })

// const el = document.getElementById('content');
// console.log('eeeeeeeee', el)
// const div = document.createElement('div');
// div.innerHTML = 'hello';

// el.appendChild(div);


import { createRoot } from 'react-dom/client'
import { createElement } from 'react'

import { Frame } from '@typecell-org/frame'
// import '@typecell-org/frame/style.css'
import styles from './style.css';

import * as tce from '@typecell-org/editor/dist/typecell-editor.mjs'

import {
	getRequestToken,
	getCurrentUser,
	onRequestTokenUpdatet,
  } from '@nextcloud/auth'

  const user = getCurrentUser()

if (user.isAdmin) {
  // do something
  console.log('I AM Sauron, the dark admin', user)
} else {
  console.log('I AM hobbit, I mean nothing here', user)
	
}


const props = {
	documentIdString: 'abc',
    roomName: 'testRoom',
    userColor: 'testColor',
    userName: 'testUser', 
}

console.log(`DocumentView ----`, { tce })

const Wrapper = () => {
	console.log(`style shheeeeeeeee`, styles)
	const styleEl = createElement('style', {}, styles)
	return createElement('div', { className: 'fullSize' },
		styleEl, 
		createElement(Frame, props, null));
}

const sheet = new CSSStyleSheet()
sheet.replaceSync('.fullSize { background-color: white; color: red; border: 2px dotted black;}')

const el = document.getElementById('typecell_frame')
const shadowRoot = el.attachShadow({ mode: 'open' })
shadowRoot.adoptedStyleSheets = [sheet]

// const root = createRoot(el)
const root = createRoot(shadowRoot)
// const relm = createElement(Frame, props, null)
const relm = createElement(Wrapper, props, null)
root.render(relm)
