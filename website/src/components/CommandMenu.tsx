'use client';

import { Command } from 'cmdk-lite';
import '@/styles/cmdk-lite/vercel.scss';

const CommandMenu = () => {
  return (
    <div className="vercel">
      <Command label="Command Menu">
        <Command.Input />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Letters">
            <Command.Item>a</Command.Item>
            <Command.Item>b</Command.Item>
            <Command.Separator />
            <Command.Item>c</Command.Item>
          </Command.Group>

          <Command.Item>Apple</Command.Item>
        </Command.List>
      </Command>
    </div>
  );
};

export default CommandMenu;
