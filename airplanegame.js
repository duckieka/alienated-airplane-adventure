const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'You are on a plane, do you need to go to the bathroom? ',
    options: [
      {
        text: 'Yes',
        nextText: 2
      },
      {
        text: 'No',
        nextText: 16
      }
    ]
  },
  {
    id: 2,
    text: 'You go to the bathroom, are you going to lock the door?',
    options: [
      {
        text: 'Yes, of course',
        nextText: 3
      },
      {
        text: 'Nah >:)',
        nextText: 7
      },
    ]
  },
  {
    id: 3,
    text: 'You lock the door like a sane human being would do. Suddenly there is turbulence! Good thing you locked the door. ',
    options: [
      {
        text: 'Continue',
        nextText: 8
      },
    ]
  },
  {
    id: 4,
    text: 'You wake up to strange, yet familar noises. What will you do?',
    options: [
        {
          text: 'Lie there and do nothing',
          nextText: 5
        },
        {
          text: 'Yell for help',
          nextText: 6
        },
      ]
  },
  {
    id: 5,
    text: "You decide to just lie there as your alien family gives you medicine. Turns out you stayed in your human form for too long while doing human-like activities such as going to the bathroom. It exhuasted you a lot, luckily your alien family was able to arrive in time and help you! Too bad you weren't able to carry out your mission tho :(",
    options: [
        {
          text: 'Replay',
          nextText: -1
        },
      ]
  },
  {
    id: 6,
    text: 'You yell for help and suddenly you wake up in a cold sweat ontop of a roof with a dark dark sky. Did you end up in a black hole?',
    options: [
      {
        text: 'Try again',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: "Well I won't judge. You decide not to lock the door. Suddenly there's turbulence and the door swings open! Smh, should've locked the door. Well to late for that now I guess. You feel as if the turbulence was a rather unnatural occurence. What will you do now? ",
    options: [
      {
        text: 'Return to your seat',
        nextText: 8
      },
      {
        text: 'Go check on the cockpit',
        nextText: 9
      },
    ]
  },
  {
    id: 8,
    text: 'After using the bathroom you return to your seat. However on your way back, you end up fainting, oh no!',
    options: [
      {
        text: 'Wake up',
        nextText: 4
      }
    ]
  },
  {
    id: 9,
    text: 'You make you way to the cockpit and end up finding the pilots unconsious! How is the plane still even flying? Will you take the wheel?',
    options: [
      {
        text: 'Yes!',
        nextText: 10
      },
      {
          text: "I don't know how to fly a plane!",
          nextText: 15
      }
    ]
  },
  {
    id: 10,
    text: 'You decide to take control over the plane. Which direction are we going?',
    options: [
        {
          text: 'UP',
          nextText: 11
        },
        {
          text: 'DOWN',
          nextText: 14
        },
      ]
  },
  {
    id: 11,
    text: "And we're going up!",
    options: [
      {
        text: 'Continue',
        nextText: 12
      },
    ]
  },
  {
    id: 12,
    text: 'The airplane suddenly turned into a UFO?',
    options: [
      {
        text: 'Continue',
        nextText: 13
      },
    ]
  },
  {
    id: 13,
    text: "And now we're in outer space! Congrats!! You were able to successfully carry out your mission of being undercover alien and abducting humans! Everything in the plane was pre set-up beforehand, it was all left to you to carry out the plan! Thank you for saving the alien race!!!",
    options: [
      {
        text: 'Play again',
        nextText: -1
      },
    ]
  },
  {
    id: 14,
    text: "Down, down, down we go! Suddenly you're driving a delivery truck instead? How strange, I thought you were on a plane this whole time? I wonder what you're delivering. " ,
    options: [
      {
        text: 'Try again',
        nextText: -1
      }
    ]
  },
  {
    id: 15,
    text: 'The fate of the people on this plane is only up to you now. So you end up taking the wheel anyways subconsiously. Which direction are we going?',
    options: [
      {
        text: 'UP',
        nextText: 11
      },
      {
        text: 'DOWN',
        nextText: 14
      }
    ]
  },
  {
    id: 16,
    text: "Well of course you don't need to! How about you watch a movie?",
    options: [
      {
        text: 'Sure!',
        nextText: 17
      },
      {
        text: 'Nah',
        nextText: 23
      }
    ]
  },
  {
    id: 17,
    text: 'Alright what movie do you want to watch?',
    options: [
      {
        text: 'Prince and the Froog',
        nextText: 18
      },
      {
        text: 'Air-real-el',
        nextText: 29
      }
    ]
  },
  {
    id: 18,
    text: 'Are you sure you want to watch Prince and the Froog?',
    options: [
      {
        text: 'Yea',
        nextText: 19
      },
      {
        text: 'No, I am not',
        nextText: 23
      }
    ]
  },
  {
    id: 19,
    text: 'You watch Prince and the Froog and cry a bit at the end. Will you take a nap?',
    options: [
      {
        text: "Yea I'm tired",
        nextText: 20
      },
      {
        text: 'Sleep is for the weak',
        nextText: 22
      }
    ]
  },
  {
    id: 20,
    text: 'You doze off, thinking about being a frog',
    options: [
      {
        text: 'Continue',
        nextText: 21
      },
    ]
  },
  {
    id: 21,
    text: "When you wake up, you find yourself in a swamp " ,
    options: [
      {
        text: 'Who even am I again?',
        nextText: 34
      },
    ]
  },
  {
    id: 22,
    text: "Well, sucks for you because you're weak. You end up sleeping very deeply.",
    options: [
      {
        text: 'Continue',
        nextText: 21
      },
    ]
  },
  {
    id: 23,
    text: 'You decide to take a nap instead of watching a movie',
    options: [
      {
        text: 'Continue',
        nextText: 24
      },
    ]
  },
  {
    id: 24,
    text: "When you wake up from your nap, you are served an airplane food dinner. There's only two options on the menu, which will you choose?",
    options: [
      {
        text: 'Vegetable Noodles',
        nextText: 25
      },
      {
        text: 'Chicken Rice',
        nextText: 27
      }
    ]
  },
  {
    id: 25,
    text: 'After eating a suprisingly good meal with various vegetables stir-fried with noodles, you decide to just chill on the plane until you arrive at your destination.',
    options: [
      {
        text: 'Continue',
        nextText: 26
      },
    ]
  },
  {
    id: 26,
    text: 'You arrived safely at your destination! You step out of the plane into a cornfield in the middle of nowhere in (most likely) outer space.',
    options: [
      {
        text: 'Try again',
        nextText: -1
      },
    ]
  },
  {
    id: 27,
    text: 'After eating your (quite good-tasting) chicken rice meal, you decide to just chill on the plane until you arrive at your destination.',
    options: [
      {
        text: 'Continue',
        nextText: 28
      },
    ]
  },
  {
    id: 28,
    text: 'The plane has finally landed! You thank the airplane staff on your way out of the plane into a really cooped up chicken coop, that is floating, as space has little to no gravity.',
    options: [
      {
        text: 'Try again',
        nextText: -1
      },
    ]
  },
  {
    id: 29,
    text: 'Are you sure you want to watch Air-real-el',
    options: [
      {
        text: 'Yes! Can I watch my movie now?? >:(',
        nextText: 30
      },
      {
        text: 'Actually no',
        nextText: 23
      }
    ]
  },
  {
    id: 30,
    text: 'You wate Air-real-el and question a lot of the logic in the movie. With your mind filled with questions, you start to feel a bit tired.',
    options: [
      {
        text: 'Take a nap',
        nextText: 31
      },
      {
        text: "I'm not tired!",
        nextText: 35
      }
    ]
  },
  {
    id: 31,
    text: 'You start to think about fish to distract your mind to ease yourself into sleep.',
    options: [
      {
        text: 'Continue',
        nextText: 32
      },
    ]
  },
  {
    id: 32,
    text: 'When you wake up you find yourself in the middle of the ocean',
    options: [
      {
        text: 'You hear laughter',
        nextText: 33
      },
    ]
  },
  {
    id: 33,
    text: 'Your mermaid princess sisters pulled a sleeping prank on you causing you to dream about weird flying pieces on metal. They also scribbled all over your face while you were asleep lmao',
    options: [
      {
        text: 'Try again',
        nextText: -1
      },
    ]
  },
  {
    id: 34,
    text: "That's when you remember that you are in fact, a human turned frog. I guess you missed flying on a plane sp much that you dreamed about it lololololol",
    options: [
      {
        text: 'Try again',
        nextText: -1
      },
    ]
  },
  {
    id: 35,
    text: "You sound like a child. You fell into a really deep slumber. Also I can not believe you would try to lie to me about you not being tired :(",
    options: [
      {
        text: 'Continue',
        nextText: 32
      },
    ]
  },
  {
    id: 36,
    text: '',
    options: [
      {
        text: '',
        nextText: -1
      },
      {
        text: '',
        nextText: -1
      }
    ]
  },
  {
    id: 37,
    text: '',
    options: [
      {
        text: '',
        nextText: -1
      },
      {
        text: '',
        nextText: -1
      }
    ]
  },
]

startGame()
