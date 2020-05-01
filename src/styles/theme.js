import { css } from 'styled-components'
import { rem as _rem } from 'polished'

const rem = (...arg) => _rem(...arg)

const flex = opt => css`
  display: flex;
  justify-content: ${opt.x || 'center'};
  align-items: ${opt.y || 'center'};
`

const hover = inner => css`
  &:hover,
  &:focus {
    ${inner}
  }
`

const media = {
  custom: (n, inner) => css`
    @media (max-width: ${n / 16}em) {
      ${inner}
    }
  `,
  mobile: inner => css`
    @media (max-width: ${890 / 16}em) {
      ${inner}
    }
  `,
  phone: inner => css`
    @media (max-width: ${650 / 16}em) {
      ${inner}
    }
  `
}

export default {
  primary: '#FF9800',
  black: '#333',
  backBlack: '#202329',
  gray: '#9E9E9E',
  whitesmoke: '#f5f5f5',
  lightgray: '#d8d8d8',
  shadow: '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)',
  navHeight: 80,
  mixins: {
    flex,
    hover
  },
  media: {
    ...media
  },
  spacing: {
    rem,
    _4: rem(4),
    _8: rem(8),
    _12: rem(12),
    _16: rem(16),
    _20: rem(20),
    _24: rem(24),
    _28: rem(28),
    _32: rem(32)
  }
}