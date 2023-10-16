
import type { ClassAttributes, HTMLAttributes } from 'react';
import Markdown, { type ExtraProps } from 'react-markdown';
import AiBlock from './AiBlock';

const MarketingPlanDocument = ({ content }: {
    content: string;
}) => {
  const components = {
    p: (props: ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement> & ExtraProps) => {
      const { node, ...rest } = props;
      return (
        <div>
          <p {...rest} />
          <AiBlock
            title="Marketer"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            text={node.children[0].value}
          />
        </div>
      );
    },
  };

  return (
    <>
      <div className='w-3/4 bg-white p-8 rounded-md'>
        <Markdown
          className="w-full text-black prose lg:prose-xl markdown-content"
          components={components}
          children={content} />
      </div>
    </>
  );
};

export default MarketingPlanDocument;
