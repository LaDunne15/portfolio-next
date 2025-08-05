import React from '@/assets/svg/react.svg';
import Redux from '@/assets/svg/redux.svg';
import Mongo from '@/assets/svg/mongo.svg';
import NextJS from '@/assets/svg/nextjs.svg';
import { TechItemName } from '@/types/project';

import { Tooltip } from 'react-tooltip';

interface Props {
  name: TechItemName;
  size?: number;
  bgColor?: string;
}

export const TechItem = ({ name, size = 50, bgColor = '#000' }: Props) => {
  const styleIcon = { width: `${size}px`, height: `${size}px`, color: '#FFF' };

  const getIcon = (name: TechItemName) => {
    switch (name) {
      case 'React':
        return <React style={styleIcon} />;
      case 'Redux':
        return <Redux style={styleIcon} />;
      case 'MongoDB':
        return <Mongo style={styleIcon} />;
      case 'Next.js':
        return <NextJS style={styleIcon} />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: bgColor,
          borderRadius: '5px',
          padding: '5px',
        }}
        data-tooltip-id={name}
        data-tooltip-content={name}
      >
        {getIcon(name)}
      </div>

      <Tooltip id={name} variant="dark" />
    </>
  );
};
