﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank.Funcionarios
{
    public class Funcionario
    {

        // 0 - funcionario
        // 1 - diretor
        // 2 designer
        // N - ...
        private int _tipo;

        public string Nome { get; set; }
        public string CPF { get; set; }
        public Double Salario { get; set; }
        public double GetBonificacao()
        {
            //if (_tipo == 1)
            //    return Salario;


            return Salario * 0.10;
        }


       public Funcionario(int tipo)
        {
            _tipo = tipo;
        }

    }    
}
