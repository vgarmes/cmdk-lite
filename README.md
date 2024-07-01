# cmdk-lite

cmdk-lite is a command menu for React based on [pacocoursey's cmdk](https://github.com/pacocoursey/cmdk) but without any dependencies. cmdk-lite is library-agnostic, allowing you to choose how you want to render the command menu.

## Install

```bash
pnpm install cmdk-lite
```

## Use

```tsx
import { Command } from 'cmdk-lite';

const CommandMenu = () => {
  return (
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
  );
};
```

If you want to render it in a dialog, you need to provide the dialog component yourself (because the library doesn't provide any). For example, using Material UI's Dialog component:

```tsx
import { Command } from 'cmdk-lite';
import { Dialog } from '@mui/material';

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false);

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
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
    </Dialog>
  );
};
```
