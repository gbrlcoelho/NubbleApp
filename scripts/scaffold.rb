#!/usr/bin/env ruby

def pascal_case?(str)
  str =~ /^[A-Z][a-zA-Z]*$/
end

def create_folder(path)
  Dir.mkdir(path) unless Dir.exist?(path)
end

def create_file(path, content)
  File.open(path, "w") { |file| file.puts content }
end

def get_component_name
  print "Provide a name for your component in PascalCase: "
  gets.chomp
end

def validate_component_name(name)
  unless pascal_case?(name)
    puts "Component name must be in PascalCase. Please provide a valid name."
    exit
  end

  if Dir.exist?("src/components/#{name}")
    puts "The component #{name} already exists. Please provide a different name."
    exit
  end
end

def create_component_files(name, folder)
  props_file_content = "export interface #{name}Props {}"
  create_file("#{folder}/#{name}Props.ts", props_file_content)

  component_file_content = <<-HEREDOC
import React from 'react';
import {Box} from '@components';
import {#{name}Props} from './#{name}Props';

export const #{name} = ({}: #{name}Props) => {
  return (
    <Box>
      <></>
    </Box>
  );
};
  HEREDOC
  create_file("#{folder}/#{name}.tsx", component_file_content)
end

def create_test_files(name, folder)
  test_file_content = <<-HEREDOC
import React from 'react';
import {render} from '@testing-library/react-native';
import {#{name}} from '../#{name}';

describe('#{name}', () => {
  it('should render correctly', () => {
    const {toJSON} = render(<#{name} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
  HEREDOC
  create_file("#{folder}/#{name}.spec.tsx", test_file_content)
end

def add_to_index(name)
  index_file_path = "src/components/index.ts"
  File.open(index_file_path, "a") { |file| file.puts "export {#{name}} from './#{name}/#{name}';" }
end

def create_component
  component_name = get_component_name
  validate_component_name(component_name)

  component_folder = "src/components/#{component_name}"
  create_folder(component_folder)

  create_component_files(component_name, component_folder)

  component_test_folder = "#{component_folder}/__tests__"
  create_folder(component_test_folder)

  create_test_files(component_name, component_test_folder)

  add_to_index(component_name)

  puts "Component #{component_name} created successfully in #{component_folder}."
end

create_component