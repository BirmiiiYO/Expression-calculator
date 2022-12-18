export const switchTheme = (e) => {
  switch (e.target.value) {
    case 'lightTheme': {
      localStorage.setItem('theme', 'lightTheme')
      return {
        theme: lightTheme,
        value: 'lightTheme',
      }
    }
    case 'colorTheme': {
      localStorage.setItem('theme', 'colorTheme')
      return {
        theme: colorTheme,
        value: 'colorTheme',
      }
    }
    case 'darkTheme': {
      localStorage.setItem('theme', 'darkTheme')
      return {
        theme: darkTheme,
        value: 'darkTheme',
      }
    }
    default:
      return {
        theme: darkTheme,
        value: 'darkTheme',
      }
  }
}
