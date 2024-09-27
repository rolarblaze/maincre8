
interface Content {
  id: string; 
  title?: string; 
  paragraph?: string; 
  list?: ListItem[]; 
  under?: string; 
  headline?: string; 
  sections?: Section[]; 
}

interface ListItem {
  id: number; 
  title?: string; 
  text: string; 
}

interface Section {
  id: number; 
  title: string; 
  list: ListItem[]; 
}
