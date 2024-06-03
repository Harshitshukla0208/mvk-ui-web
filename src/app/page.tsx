import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero bg-transparent" style={{height: '650px'}}>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Rapidly build websites using mvk-ui</h1>
            <p className="py-6">Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}
