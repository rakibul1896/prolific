import { content } from '../data/MenuJson';

const JsonFile = () => {
  return (
    <pre className="p-8">
      <code>{JSON.stringify(content, null, 4)}</code>
    </pre>
  );
};
export default JsonFile;
