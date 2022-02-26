import './App.css';
import { Layout } from 'antd';
import HeaderFile from './Components/HeaderFile';
import ContentFile from './Components/ContentFile';
import SiderFile from './Components/SiderFile';
import MobileHeader from './Components/MobileHeader';
import useWindowSize from './WindowSize';

const { Header, Sider, Content } = Layout;

function App() {
  const {width, height} = useWindowSize();
  if (width>600 && height>844) {
    return (
      <div>
        <Layout style={{height:"100vh"}}>
          <Header><HeaderFile/></Header>
          <Layout>
            <Content><ContentFile/></Content>
            <Sider><SiderFile/></Sider>
          </Layout>
        </Layout>
      </div>
    );
  } else {
    return (
    <Layout>
      <Header><MobileHeader/></Header>
      <Content><ContentFile/></Content>
    </Layout>
    );
  }
}

export default App;
