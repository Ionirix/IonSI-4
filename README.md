# Ion SI 4 Public SDK

A standalone TypeScript sample package containing public interfaces, mock data, and non-networking API stubs.

## Requirements

- Node.js 18 or newer
- npm

## Checks

```sh
npm install
npm run check
npm test
```

The sample endpoint is `/api/public-endpoint`. The SDK does not contact a service or require credentials.

## Layout

- `ion-si-4/packages/` contains the public TypeScript package samples.
- `Data/` contains synthetic example data.
- The remaining top-level folders retain their names for layout compatibility and contain no runtime implementation.

This repository copy is provided without deployment configuration or production integrations.