export interface ITheme {
  colors: {
    red: string;
    lightBackground: string;
    darkText: string;
  };
}

const theme: ITheme = {
  colors: {
    red: '#ff4c6a',
    lightBackground: '#f2f5f7',
    darkText: '#242c33',
  },
};

export default theme;