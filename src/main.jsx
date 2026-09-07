import { ViteReactSSG } from 'vite-react-ssg'
import './index.css'
import App from './App.jsx'
import HomePage from './components/HomePage'
import Project from './components/Projects'
import Publications from './components/Publications'
import AboutContact from './components/AboutContact'

const routes = [
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: 'projects', Component: Project },
      { path: 'publications', Component: Publications },
      { path: 'contact', Component: AboutContact },
    ],
  },
];

export const createRoot = ViteReactSSG({ routes })
