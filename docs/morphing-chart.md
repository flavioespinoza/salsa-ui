# MorphingChart

A versatile chart component that displays GitHub commit data as either a stacked bar chart or a pie chart, with interactive toggling between views. Supports time-based grouping and detailed tooltips.

## Data

Ensure you have a data source (e.g., `/<your-path>/<your-data>.json`) available.

---

## 📦 Import

```tsx
import { MorphingChart } from '@flavioespinoza/salsa-ui'
```

---

## Usage

Import and use the `MorphingChart` component in your React application:

```tsx
function App() {
  const handleFiltered = (commits) => {
    // Custom filtering logic
    return commits
  }

  return (
    <MorphingChart
      groupBy="week"
      getFiltered={handleFiltered}
    />
  )
}
```

Wrap the component in a container with defined dimensions for proper rendering.

## Props

| Prop            | Type                                    | Default   | Description                                                                 |
|-----------------|-----------------------------------------|-----------|-----------------------------------------------------------------------------|
| `projectFilter` | `string`                                | `"all"`   | Filters commits by project name. Use `"all"` to show all projects.          |
| `search`        | `string`                                | `""`      | Filters commits by searching across all properties (case-insensitive).      |
| `groupBy`       | `'day' \| 'month' \| 'week' \| 'year'` | Required  | Groups bar chart data by the specified time interval.                       |
| `getFiltered`   | `(data: CommitData[]) => Commit[]`     | Required  | Callback function to filter and return the commit data for rendering.       |

### Commit Data Structure

The component expects commit data in the following format:

```typescript
interface Commit {
  project: string   // Project name
  branch: string    // Branch name
  date: string      // Commit date (ISO string or parseable format)
  author: string    // Author name
  message: string   // Commit message
}
```

## Examples

### Basic Bar Chart

Display commits grouped by month:

```tsx
function BasicChart() {
  const getFiltered = (commits) => commits

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <MorphingChart
        groupBy="month"
        getFiltered={getFiltered}
      />
    </div>
  )
}
```

### Filtered Chart with Search

Filter by project and search term:

```tsx
function FilteredChart() {
  const getFiltered = (commits) => {
    return commits.filter(c => c.project === 'my-project')
  }

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <MorphingChart
        projectFilter="my-project"
        search="fix"
        groupBy="week"
        getFiltered={getFiltered}
      />
    </div>
  )
}
```

## Features

- **Visualization Modes**:
  - **Stacked Bar Chart**: Displays commits per project over time, grouped by the `groupBy` prop.
  - **Pie Chart**: Shows total commits per project, toggled via a button.
- **Time Grouping**: Supports `day`, `month`, `week`, or `year` intervals for the bar chart.
- **Interactivity**:
  - Tooltips display detailed commit counts and percentages on hover.
  - Toggle button switches between bar and pie views with smooth transitions.
- **Responsive Design**: Adapts to the parent container's dimensions.

## Styling

The component uses inline styles for tooltips and relies on D3 for chart rendering. To customize appearance:

- Wrap in a styled container for layout control.
- Modify D3 scales and colors within the component source if needed (e.g., change `d3.schemeCategory10`).

Example CSS for container:

```css
.chart-container {
  width: 100%
  height: 300px
  position: relative
}
```

## Notes

- **Data Source**: Ensure commit data is fetched and passed through `getFiltered`. The component does not fetch data itself.
- **Dependencies**: Requires `d3` for rendering, `dayjs` for date handling, and `react` for component logic.
- **Performance**: Use `useCallback` for `getFiltered` to prevent unnecessary re-renders.
- **Cleanup**: Tooltips are automatically removed on unmount to prevent memory leaks.

## Related Components

- **CommitsPage**: A parent component that integrates `MorphingChart` with filtering controls and a data table.

For more details, see the source code in `morphing-chart.tsx` or the integration example in `CommitsPage.tsx`.
