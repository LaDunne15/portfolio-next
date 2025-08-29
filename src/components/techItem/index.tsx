import Image from 'next/image';
import ReactLogo from '@/assets/svg/react.svg';
import ReduxLogo from '@/assets/svg/redux.svg';
import MongoLogo from '@/assets/svg/mongo.svg';
import NextJSLogo from '@/assets/svg/nextjs.svg';
import NodeJSLogo from '@/assets/svg/nodejs.svg';
import NestLogo from '@/assets/svg/nest.svg';
import PrismaLogo from '@/assets/svg/prisma.svg';
import { TechItemName } from '@/types/project';

import { Tooltip } from 'react-tooltip';

interface Props {
  name: TechItemName;
  size?: number;
  bgColor?: string;
}

const icons: Record<TechItemName, string> = {
  React: ReactLogo,
  Redux: ReduxLogo,
  MongoDB: MongoLogo,
  'Next.js': NextJSLogo,
  'Node.js': NodeJSLogo,
  Nest: NestLogo,
  Prisma: PrismaLogo,
};

export const TechItem = ({ name, size = 50, bgColor = '#000' }: Props) => {
  const icon = icons[name];

  return (
    <>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: bgColor,
          borderRadius: '5px',
          padding: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        data-tooltip-id={name}
        data-tooltip-content={name}
      >
        {icon ? <Image src={icon} alt={name} width={size} height={size} /> : null}
      </div>

      <Tooltip id={name} variant="dark" />
    </>
  );
};
