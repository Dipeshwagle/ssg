interface Page {
  code:string;
  head:string;
}

interface AppState {
  name: string;
  codes: {
    header: string;
    footer: string;
  };
  pages:{
    index:Page
  }
}