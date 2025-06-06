import Welcome from '../markdown/welcome.mdx'
import Welcome2 from "../markdown/welcome2.mdx"
 
function CustomH1({ children }: { children: React.ReactNode }) {
  return <h1 style={{ color: 'blue', fontSize: '100px' }}>{children}</h1>
}
 
const overrideComponents = {
  h1: CustomH1,
}
 
export default function Page() {
  return <><Welcome2/><Welcome components={overrideComponents} /></>
}