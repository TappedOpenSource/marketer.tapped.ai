
import type { ClassAttributes, HTMLAttributes } from 'react';
import Markdown, { type ExtraProps } from 'react-markdown';
import AiBlock from './AiBlock';

const MarketingPlanDocument = ({ content }: {
  content: string;
}) => {
  const components = {
    p: (props: ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement> & ExtraProps) => {
      const { node, ...rest } = props;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const value = node.children[node.children.length-1].value;
      // console.log({ value });

      if (value === undefined || value === null || value === '') {
        return <p {...rest} />;
      }

      return (
        <div>
          <p {...rest} />
          <AiBlock
            text={value}
          />
        </div>
      );
    },
  };

  return (
    <>
      <div className='md:w-3/4 bg-white p-8 rounded-md'>
        <Markdown
          className="w-full text-black prose lg:prose-xl markdown-content"
          components={components}
          children={content} />
      </div>
    </>
  );
};

export default MarketingPlanDocument;
