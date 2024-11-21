import { IconTopologyFullHierarchy, IconDoorExit, IconDoorEnter, IconFileInfo, IconProps } from '@tabler/icons-react'
import { IconBrandInstagram, IconBrandTwitter, IconBrandLinkedin, IconBrandGithub, IconWorldWww, IconMail } from '@tabler/icons-react'

interface HeaderLinkInterface {
    icon: React.ComponentType<IconProps>
    href: string
    text: string
}

export const PeerShareLink: HeaderLinkInterface = {
    icon: IconTopologyFullHierarchy,
    href: '/',
    text: 'PeerShare'
}

export const HeaderLinks: HeaderLinkInterface[] = [
    {
        icon: IconDoorExit,
        href: '/server',
        text: 'Server'
    },
    {
        icon: IconDoorEnter,
        href: '/client',
        text: 'Client'
    },
    {
        icon: IconFileInfo,
        href: '/documents',
        text: 'Documents'
    },
]

interface FooterLinkInterface {
    icon: React.ComponentType<IconProps>
    href: string
    text: string
}

export const FooterLinks: FooterLinkInterface[] = [
    {
        icon: IconBrandInstagram,
        href: 'https://www.instagram.com/furkann_ibis/',
        text: 'Instagram'
    },
    {
        icon: IconBrandTwitter,
        href: 'https://x.com/ibis_furkann',
        text: 'X'
    },
    {
        icon: IconBrandLinkedin,
        href: 'https://www.linkedin.com/in/furkanibis/',
        text: 'Linkedin'
    },
    {
        icon: IconBrandGithub,
        href: 'https://github.com/furkannibis',
        text: 'Github'
    },
    {
        icon: IconWorldWww,
        href: 'https://furkanibis.dev/',
        text: 'furkanibis.dev'
    },
    {
        icon: IconMail,
        href: 'mailto:ibis.furkann@gmail.com',
        text: 'Email'
    },
]
