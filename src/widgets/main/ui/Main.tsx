
import AddMenu from '../../../features/todo/ui/addMenu';
import DataMapper from '../../../features/todo/ui/dataMapper';


export default function Main() {
  
  return (
    <div>
      <div className='container'>
        <DataMapper/>
        <AddMenu/>
      </div>
          
    </div>
  )
}
