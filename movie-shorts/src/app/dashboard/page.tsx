'use client'
// import { Input } from '@chakra-ui/react'
// import { UserButton } from "@clerk/nextjs";   
// import React, { ReactNode } from 'react';
// import {
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
// } from '@chakra-ui/react'
// import {
//   IconButton,
//   Avatar,
//   Box,
//   CloseButton,
//   Flex,
//   HStack,
//   VStack,
//   Icon,
//   useColorModeValue,
//   Link,
//   Drawer,
//   DrawerContent,
//   Text,
//   useDisclosure,
//   BoxProps,
//   FlexProps,
//   Menu,
//   MenuButton,
//   MenuDivider,
//   MenuItem,
//   MenuList,
// } from '@chakra-ui/react';
// import {
//   FiHome,
//   FiTrendingUp,
//   FiCompass,
//   FiStar,
//   FiSettings,
//   FiMenu,
//   FiBell,
//   FiChevronDown,
// } from 'react-icons/fi';

// import { IconType } from 'react-icons';
// import { ReactText } from 'react';

// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }
// const LinkItems: Array<LinkItemProps> = [
//   { name: 'Home', icon: FiHome },
//   { name: 'Trending', icon: FiTrendingUp },
//   { name: 'Explore', icon: FiCompass },
//   { name: 'Favourites', icon: FiStar },
//   { name: 'Settings', icon: FiSettings },
// ];

// export default function SidebarWithHeader({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
//       <SidebarContent
//         onClose={() => onClose}
//         display={{ base: 'none', md: 'block' }}
//       />
//       <Drawer
//         autoFocus={false}
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size="full">
//         <DrawerContent>
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer>
//       {/* mobilenav */}
//       <MobileNav onOpen={onOpen} />
//       <Box ml={{ base: 0, md: 60 }} p="4">


//       <Input placeholder='Enter Film name' className="text-black" />
//       <Input placeholder='Enter Film name' className="text-black" />
//       <Input placeholder='Enter Film name' className="text-black" />
//       <Accordion defaultIndex={[0]} allowMultiple>
//   <AccordionItem>
//     <h2>
//       <AccordionButton >
//         <Box as="span" flex='1' textAlign='left' className="text-gray">
//           Section 1 title
//         </Box>
//         <AccordionIcon />
//       </AccordionButton>
//     </h2>
//     <AccordionPanel pb={4} className="text-black">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//       commodo consequat.
//     </AccordionPanel>
//   </AccordionItem>
// </Accordion>

// <Menu>
//           <MenuButton
//             as={IconButton}
//             aria-label="Options"
//             icon={<FiChevronDown />}
//             variant="outline"
//             size="sm"
//           />
//           <MenuList className="text-black">
//             <MenuItem>Option 1</MenuItem>
//             <MenuItem>Option 2</MenuItem>
//             <MenuItem>Option 3</MenuItem>
//           </MenuList>
//         </Menu>


//         {children}
//       </Box>
//     </Box>
//   );
// }

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

// const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
//   return (
//     <Box
//       transition="3s ease"
//       bg={useColorModeValue('white', 'gray.900')}
//       borderRight="1px"
//       borderRightColor={useColorModeValue('gray.200', 'gray.700')}
//       w={{ base: 'full', md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}
//       className="text-black">
//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
//           Logo
//         </Text>
//         <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   );
// };

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
// }
// const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
//   return (
//     <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
//       <Flex
//         align="center"
//         p="4"
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: 'cyan.400',
//           color: 'white',
//         }}
//         {...rest}>
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: 'white',
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   );
// };

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }
// const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 4 }}
//       height="20"
//       alignItems="center"
//       bg={useColorModeValue('white', 'gray.900')}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
//       justifyContent={{ base: 'space-between', md: 'flex-end' }}
//       {...rest}>
//       <IconButton
//         display={{ base: 'flex', md: 'none' }}
//         onClick={onOpen}
//         variant="outline"
//         aria-label="open menu"
//         icon={<FiMenu />}
//       />

//       <Text
//         display={{ base: 'flex', md: 'none' }}
//         fontSize="2xl"
//         fontFamily="monospace"
//         fontWeight="bold">
//         Logo
//       </Text>

//       <HStack spacing={{ base: '0', md: '6' }}>
//         <IconButton
//           size="lg"
//           variant="ghost"
//           aria-label="open menu"
//           icon={<FiBell />}
//         />
//         <Flex alignItems={'center'}>
//           <Menu>
//           <UserButton afterSignOutUrl="/" />
//           <Text fontSize="xs" color="gray.600">
//                     Admin
//                   </Text>
//             {/* <MenuButton
//               py={2}
//               transition="all 0.3s"
//               _focus={{ boxShadow: 'none' }}>
//               <HStack>
//                 <Avatar
//                   size={'sm'}
//                   src={
//                     'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
//                   }
//                 />
//                 <VStack
//                   display={{ base: 'none', md: 'flex' }}
//                   alignItems="flex-start"
//                   spacing="1px"
//                   ml="2">
//                   <Text fontSize="sm">Justina Clark</Text>
//                   <Text fontSize="xs" color="gray.600">
//                     Admin
//                   </Text>
//                 </VStack>
//                 <Box display={{ base: 'none', md: 'flex' }}>
//                   <FiChevronDown />
//                 </Box>
//               </HStack>
//             </MenuButton> */}
//             <MenuList
//               bg={useColorModeValue('white', 'gray.900')}
//               borderColor={useColorModeValue('gray.200', 'gray.700')}
//               className="text-black"
//               >

//               <MenuItem>Profile</MenuItem>
//               <MenuItem>Settings</MenuItem>
//               <MenuItem>Billing</MenuItem>
//               <MenuDivider />
//               <MenuItem>Sign out</MenuItem>
//             </MenuList>
//           </Menu>
//         </Flex>
//       </HStack>
//     </Flex>
//   );
// };
import React from 'react'
import AdminNav from "../(componants)/adminnav"
import Createmovie from "../(componants)/(addform)/createmovie"
import Addform from "../(addmovieform)/moviadd"

export default function page() {
  return (
  <>
    <div><AdminNav /></div>
    {/* <div><Createmovie/> </div> */}
    <div><Addform/></div>
  </>
  )
}
