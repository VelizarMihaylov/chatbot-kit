import fetch from 'isomorphic-fetch'

const messengerProfileApi = fetch => async ctx => {
  const requestBody = {
    'get_started': {
      payload: 'GET_STARTED'
    },
    greeting: [
      {
        locale: 'default',
        text: 'Hello {{user_first_name}} my name is Verbotly and I am a friendly messenger chat bot that can help you grow your business! Click on the Get Started button below to learn more.'
      }
    ],
    'persistent_menu': [
      {
        'locale': 'default',
        'composer_input_disabled': false,
        'call_to_actions': [
          {
            'title': 'My Account',
            'type': 'nested',
            'call_to_actions': [
              {
                title: 'What is a chatbot?',
                'type': 'postback',
                'payload': 'WHAT_IS_A_CHAT_BOT'
              },
              {
                'type': 'web_url',
                'title': 'Latest News',
                'url': 'https://www.messenger.com/',
                'webview_height_ratio': 'full'
              }
            ]
          }
        ]
      }
    ]
  }

  const response = await fetch(`https://graph.facebook.com/v2.6/me/messenger_profile?access_token=${process.env.PAGE_ACCESS_TOKEN}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })

  const { result } = await response.json()
  if (result.match('success')) {
    ctx.status = 200
    ctx.body = 'Profile Updated'
  }
}

const messengerProfileApiMiddleware = messengerProfileApi(fetch)

export default messengerProfileApiMiddleware
