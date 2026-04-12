import { Link } from '@tanstack/react-router'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'


export function AppTitle() {
  const { setOpenMobile } = useSidebar()
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size='lg'
          className='gap-0 py-0 hover:bg-transparent active:bg-transparent'
          asChild
        >

          <div>
            <Link
              to='/'
              onClick={() => setOpenMobile(false)}
              className='grid flex-1 text-start text-sm leading-tight'
            >
              <img src='/images/headbar.png' alt='multiprint' className='h-18 w-50'/>
            </Link>
            
          
          </div>

        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

