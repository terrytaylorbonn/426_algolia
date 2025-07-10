import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

export default function SearchBar() {
  return (
    <DocSearch
      appId="6B0P0R08FS"
      indexName="ttbonn_index_1"
      apiKey="853723f13c4712cb093ef196a181f04d" // search api key
    />
  );
}