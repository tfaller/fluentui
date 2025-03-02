/** @jsxRuntime classic */
/** @jsx createElement */

import { createElement } from '@fluentui/react-jsx-runtime';
import { getSlotsNext } from '@fluentui/react-utilities';
import type { MenuItemRadioState } from './MenuItemRadio.types';
import type { MenuItemSlots } from '../MenuItem/MenuItem.types';

/**
 * Redefine the render function to add slots. Reuse the menuitemradio structure but add
 * slots to children.
 */
export const renderMenuItemRadio_unstable = (state: MenuItemRadioState) => {
  const { slots, slotProps } = getSlotsNext<MenuItemSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {slots.checkmark && <slots.checkmark {...slotProps.checkmark} />}
      {slots.icon && <slots.icon {...slotProps.icon} />}
      {slots.content && <slots.content {...slotProps.content} />}
      {slots.secondaryContent && <slots.secondaryContent {...slotProps.secondaryContent} />}
    </slots.root>
  );
};
