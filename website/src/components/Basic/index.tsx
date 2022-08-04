import React from 'react';
import { Accordion, AccordionItem } from '../accordion';

export default function Basic() {
  return (
    <Accordion>
      <AccordionItem header="What is Lorem Ipsum?">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </AccordionItem>
      <AccordionItem header="Where does it come from?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin
        fringilla vel erat quis sodales. Nam ex enim,
        eleifend venenatis lectus vitae, accumsan auctor mi.
        Sed ac varius magna, in feugiat justo. Quisque
        eleifend, ligula vel maximus auctor, urna massa
        pharetra lorem, vitae feugiat dui felis eu nunc.
        Duis in est vitae metus tincidunt convallis.
        Curabitur viverra odio sit amet metus elementum
        tincidunt. Integer eleifend, augue nec eleifend
        semper, neque nulla pellentesque tortor, dictum
        porttitor nulla diam eget elit. Suspendisse potenti.
        Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Nullam
        ullamcorper erat ac ligula lacinia, id interdum
        nulla porta. Vivamus id velit ut nunc dignissim
        euismod nec sed enim.
      </AccordionItem>
      <AccordionItem header="Why do we use it?">
        Suspendisse massa risus, pretium id interdum in,
        dictum sit amet ante. Fusce vulputate purus sed
        tempus feugiat. Donec sodales enim posuere nunc
        convallis, nec ullamcorper turpis euismod. Cras sit
        amet nunc blandit ipsum maximus suscipit eu et
        sapien. Nullam tempus tempus dignissim. Sed varius
        nisl eget finibus maximus. Aliquam erat volutpat.
        Integer arcu mi, varius eu nisi at, molestie mattis
        mauris. Curabitur ut pretium risus. In hac habitasse
        platea dictumst. Suspendisse molestie purus nec
        tempus efficitur.
      </AccordionItem>
    </Accordion>
  );
}
