import Approval from '../../components/Approval';

// Force this page to be rendered only on the client side
export const dynamic = 'force-dynamic';

export default function ApprovalPage() {
  return <Approval />;
}