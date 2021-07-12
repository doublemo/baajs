rem 生成协议文件
node ../../../node_modules/protobufjs/bin/pbjs -t static-module -w commonjs -o proto.js ./*.proto 
node ../../../node_modules/protobufjs/bin/pbts -o proto.d.ts proto.js