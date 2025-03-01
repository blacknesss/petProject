import TodoForm from "@/features/todo/ui/todoForm";


export default function Header() {
  return (
    <div style={{paddingTop: '25px', marginBottom: '45px'}}>
      <div className="container">
          <h1 style={{textAlign: 'center', marginBottom: '25px'}}>TODO LIST</h1>
          <TodoForm/>
      </div>
    </div>
  )
}
