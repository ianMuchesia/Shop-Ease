import { clearFocusedComponent, setFocusedComponent } from '@/store/features/focusCategorySlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

const UseFocusManager = () => {

    const dispatch = useAppDispatch()



    const focusedCategoryComponent = useAppSelector(state=>state.focusedCategoryComponent.focusCategoryComponent)

    const setFocus = (component:string) => {
        dispatch(setFocusedComponent(component))
    }

    const clearFocus = () =>{
        dispatch(clearFocusedComponent())
    }
  return {
    focusedCategoryComponent,
    setFocus,
    clearFocus
  }
}

export default UseFocusManager