*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Segoe UI',sans-serif;
}

body{
  background:#f4f6f9;
  padding:20px;
  color:#222;
}

.container{
  max-width:1200px;
  margin:auto;
}

h1{
  text-align:center;
  margin-bottom:25px;
  color:#0d47a1;
}

h2{
  margin-bottom:15px;
  color:#0d47a1;
}

.card{
  background:white;
  padding:20px;
  margin-bottom:25px;
  border-radius:12px;
  box-shadow:0 2px 10px rgba(0,0,0,.1);
}

.formulario{
  display:grid;
  grid-template-columns:
  150px 1fr 80px 1fr 80px 150px;
  gap:10px;
}

input, select{
  padding:10px;
  border:1px solid #ccc;
  border-radius:6px;
}

button{
  border:none;
  background:#0d47a1;
  color:white;
  border-radius:6px;
  cursor:pointer;
  font-weight:600;
}

button:hover{
  background:#1565c0;
}

table{
  width:100%;
  border-collapse:collapse;
}

thead{
  background:#0d47a1;
  color:white;
}

th, td{
  padding:10px;
  text-align:center;
  border:1px solid #ddd;
}

tbody tr:nth-child(even){
  background:#f7f7f7;
}

tbody tr:hover{
  background:#e3f2fd;
}

.lider{background:#d4edda !important;}
.segundo{background:#fff3cd !important;}
.terceiro{background:#f8d7da !important;}
