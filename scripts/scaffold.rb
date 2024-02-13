def camel_case?(str)
    return false if str !~ /^[A-Z][a-zA-Z]*$/
    words = str.split(/(?=[A-Z])/)
    words.all? { |word| word =~ /^[A-Z][a-z]*$/ }
  end
  
  print "Provide a name for your component in CamelCase: "
  component_name = gets.chomp
  
  unless camel_case?(component_name)
      puts "Component name must be in CamelCase. Please provide a valid name."
      exit
  end
  
  component_folder = "src/components/#{component_name}"
  if Dir.exist?(component_folder)
      puts "The component #{component_name} already exists. Please provide a different name."
      exit
  end
  
  Dir.mkdir(component_folder)
  
  component_props_file = "#{component_folder}/#{component_name}Props.ts"
  File.open(component_props_file, "w") do |file|
    file.puts "export interface #{component_name}Props {}"
  end
  
  component_file = "#{component_folder}/#{component_name}.tsx"
  File.open(component_file, "w") do |file|
    file.puts "import React from 'react';"
    file.puts ""
    file.puts "import {Box} from '@components';"
    file.puts ""
    file.puts "import {#{component_name}Props} from './#{component_name}Props';"
    file.puts ""
    file.puts "export const #{component_name} = ({}: #{component_name}Props) => {"
    file.puts "  return ("
    file.puts "    <Box>"
    file.puts "      <></>"
    file.puts "    </Box>"
    file.puts "  );"
    file.puts "};"
  end
  
  component_test_folder = "#{component_folder}/__tests__"
  Dir.mkdir(component_test_folder)
  
  component_test_file = "#{component_test_folder}/#{component_name}.spec.tsx"
  
  File.open(component_test_file, "w") do |file|
    file.puts "import React from 'react';"
    file.puts ""
    file.puts "import {render} from '@testing-library/react-native';"
    file.puts ""
    file.puts "import {#{component_name}} from '../#{component_name}';"
    file.puts ""
    file.puts "describe('#{component_name}', () => {"
    file.puts "  it('should render correctly', () => {"
    file.puts "    const {toJSON} = render(<#{component_name} />);"
    file.puts "    expect(toJSON()).toMatchSnapshot();"
    file.puts "  });"
    file.puts "});"
  end
  
  puts "Component #{component_name} created successfully in #{component_folder}."
  
  # FILEPATH: /Users/user/Study/Nubble/NubbleApp/scaffold.js
  # const readline = require('readline');
  # const fs = require('fs');
  
  # const rl = readline.createInterface({
  #   input: process.stdin,
  #   output: process.stdout,
  # });
  
  # function camelCase(str) {
  #   return (
  #     /^[A-Z][a-zA-Z]*$/.test(str) &&
  #     str.split(/(?=[A-Z])/).every(word => /^[A-Z][a-z]*$/.test(word))
  #   );
  # }
  
  # rl.question(
  #   'Provide a name for your component in CamelCase: ',
  #   function (component_name) {
  #     if (!camelCase(component_name)) {
  #       console.log(
  #         'Component name must be in CamelCase. Please provide a valid name.',
  #       );
  #       rl.close();
  #       return;
  #     }
  
  #     const component_folder = `src/components/${component_name}`;
  #     if (fs.existsSync(component_folder)) {
  #       console.log(
  #         `The component ${component_name} already exists. Please provide a different name.`,
  #       );
  #       rl.close();
  #       return;
  #     }
  
  #     fs.mkdirSync(component_folder);
  
  #     const component_props_file = `${component_folder}/${component_name}Props.ts`;
  #     fs.writeFileSync(
  #       component_props_file,
  #       `export interface ${component_name}Props {}
        
  #       `,
  #     );
  
  #     const component_file = `${component_folder}/${component_name}.tsx`;
  #     fs.writeFileSync(
  #       component_file,
  #       `import React from 'react';
    
  # import {Box} from '@components';
  
  # import {${component_name}Props} from './${component_name}Props';
  
  # export const ${component_name} = ({}: ${component_name}Props) => {
  #   return (
  #     <Box>
  #       <></>
  #     </Box>
  #   );
  # };
  
  # `,
  #     );
  
  #     const component_test_folder = `${component_folder}/__tests__`;
  #     fs.mkdirSync(component_test_folder);
  
  #     const component_test_file = `${component_test_folder}/${component_name}.spec.tsx`;
  #     fs.writeFileSync(
  #       component_test_file,
  #       `import {render} from '@testing-library/react-native';
  
  # import {${component_name}} from '../${component_name}';
  
  # describe('#{component_name}', () => {
  #   it('should render correctly', () => {
  #     const {toJSON} = render(<${component_name} />);
  #     expect(toJSON()).toMatchSnapshot();
  #   });
  # });
  
  # `,
  #     );
  
  #     console.log(
  #       `Component ${component_name} created successfully in ${component_folder}.`,
  #     );
  #     rl.close();
  #   },
  # );
  
  