<template>
    <ReactWrapper :reactComponent="Frame" :props="reactProps" />
</template>

<script>
// import { createRoot } from 'react-dom/client'
// import React from 'react'

import ReactWrapper from './ReactWrapper'
import { Frame } from '@typecell-org/frame'
import '@typecell-org/frame/style.css'

// const props = {}

// const root = createRoot(document.getElementById('content'))
// console.log(`eeeeee`, Frame)
// const relm = React.createElement(Frame, props, null)
// root.render(relm)
// //<React.StrictMode>
// // <Frame
// //   documentIdString={search.documentId}
// //   roomName={search.roomName}
// //   userColor={search.userColor}
// //   userName={search.userName}
// // />
// //</React.StrictMode>
// //   );

export default {
    components: {
        ReactWrapper
    },
    data() {
        return {
            Frame,
            reactProps: {
                // props for your React component
                documentIdString: 'abc',
                roomName: 'testRoom',
                userColor: 'testColor',
                userName: 'testUser',
            }
        };
    }
};

</script>
