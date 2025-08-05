import Qms from '../components/Qms';

// Force this page to be rendered only on the client side  
export const dynamic = 'force-dynamic';

export default function HomePage() {
  return <Qms />;
}