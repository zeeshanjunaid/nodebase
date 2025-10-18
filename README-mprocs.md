# mprocs Integration for Nodebase

This project now includes [mprocs](https://github.com/pvolok/mprocs) for running multiple development processes in parallel.

## What is mprocs?

mprocs is a terminal-based process manager that allows you to run multiple commands simultaneously in a split-screen interface. It's perfect for development workflows where you need to monitor multiple processes at once.

## Usage

### Start mprocs with the project configuration:
```bash
pnpm run mprocs
```

### Or use the npm integration:
```bash
pnpm run mprocs:npm
```

## Configured Processes

The `mprocs.yaml` file includes these development processes:

1. **Next.js Dev** - Runs the Next.js development server with Turbopack
2. **Prisma Studio** - Opens Prisma Studio for database management
3. **TypeScript Check** - Runs TypeScript type checking
4. **Lint** - Runs Biome linting
5. **Build** - Runs the production build process

## Key Bindings

### Process List (when focused):
- `q` - Quit (soft kill processes)
- `Q` - Force quit (terminate processes)
- `C-a` - Focus output pane
- `x` - Soft kill selected process
- `X` - Hard kill selected process
- `s` - Start selected process
- `r` - Restart selected process
- `a` - Add new process
- `d` - Remove selected process
- `e` - Rename selected process
- `k/↑` - Select previous process
- `j/↓` - Select next process
- `z` - Zoom into terminal window
- `v` - Enter copy mode

### Terminal Output (when focused):
- `C-a` - Focus processes pane
- `C-d` - Scroll output down
- `C-u` - Scroll output up

### Copy Mode:
- `v` - Start selecting
- `c` - Copy selected text
- `Esc` - Leave copy mode

## Benefits

- **Parallel Development**: Run multiple development processes simultaneously
- **Real-time Monitoring**: See output from all processes in one interface
- **Easy Process Management**: Start, stop, and restart processes with simple key bindings
- **Copy Mode**: Easily copy output from any process
- **Customizable**: Modify `mprocs.yaml` to add or remove processes

## Customization

Edit `mprocs.yaml` to:
- Add new processes
- Modify existing process commands
- Change key bindings
- Adjust window layout
- Add environment variables

## Examples

### Add a new process:
```yaml
procs:
  "My Custom Process":
    shell: "pnpm run my-script"
    restart: true
    stop: "SIGINT"
```

### Add environment variables:
```yaml
procs:
  "Process with Env":
    shell: "my-command"
    env:
      NODE_ENV: development
      DEBUG: true
```

## Integration with package.json

The project includes these npm scripts for mprocs:
- `pnpm run mprocs` - Start mprocs with the project configuration
- `pnpm run mprocs:npm` - Start mprocs with npm script integration

This makes it easy to integrate mprocs into your development workflow!
