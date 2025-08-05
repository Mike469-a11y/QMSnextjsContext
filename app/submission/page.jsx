import Submission from '../../components/Submission';

// Force this page to be rendered only on the client side
export const dynamic = 'force-dynamic';

export default function SubmissionPage() {
  return <Submission />;
}