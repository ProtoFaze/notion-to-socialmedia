import { Button } from "@/components/ui/button";
import axios from 'axios';

interface Props {
  selectedPageId: string | null;
}

export default function PostButton({ selectedPageId }: Props) {
  const handlePost = async () => {
    console.log('Selected Page ID:', selectedPageId);

    if (!selectedPageId) {
      console.error('No page selected');
      return;
    }

    try {
      const response = await axios.post('/api/updateNotionPage', { pageID: selectedPageId });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error posting:', error);
    }
  };

  return <Button variant="custom" onClick={handlePost}>Post</Button>;
}
