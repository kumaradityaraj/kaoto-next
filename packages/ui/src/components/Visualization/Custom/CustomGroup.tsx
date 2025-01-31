import { DefaultGroup, GraphElement, Layer, isNode, observer, withSelection } from '@patternfly/react-topology';
import { FunctionComponent } from 'react';
import { CanvasNode } from '../Canvas/canvas.models';

type IDefaultGroup = Parameters<typeof DefaultGroup>[0];
interface ICustomGroup extends IDefaultGroup {
  element: GraphElement<CanvasNode, CanvasNode['data']>;
}

const CustomGroup: FunctionComponent<ICustomGroup> = observer(({ element, ...rest }) => {
  const vizNode = element.getData()?.vizNode;
  const label = vizNode?.getNodeLabel();

  if (!isNode(element)) {
    throw new Error('DefaultGroup must be used only on Node elements');
  }

  return (
    <g>
      <Layer>
        <DefaultGroup
          {...rest}
          element={element}
          label={label}
          truncateLength={15}
          showLabel={true}
          collapsible
          collapsedWidth={50}
          collapsedHeight={50}
          hulledOutline={false}
        />
      </Layer>
    </g>
  );
});

export const CustomGroupWithSelection = withSelection()(CustomGroup);
