// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'


const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'semibold', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'blue.400',
          _active: {
            bg: 'red.400'
          },
          boxShadow: '0 0 2px 2px #efdfde',
          size: 'sm'
        },
        // 4. We can override existing variants
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'blue.500',
        }),
        // 5. We can add responsive variants
        sm: {
          bg: 'teal.500',
          fontSize: 'md',
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'lg', // default is md
        variant: 'sm', // default is solid
        colorScheme: 'green', // default is gray
      },
    },
    Card: {
      baseStyle: {
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        alignItems: 'center',
        gap: 6,
        fontSize: "30px"
      },
      // Two variants: rounded and smooth
      variants: {
        rounded: {
          padding: 8,
          borderRadius: 'xl',
          boxShadow: 'xl',
          bgColor: 'red.400'
        },
        smooth: {
          padding: 6,
          borderRadius: 'base',
          boxShadow: 'md',
        },
      },
      // The default variant value
      defaultProps: {
        variant: 'smooth',
      },
    }
  },
  config: {
    useSystemColorMode: "true"
  }
})

export default theme