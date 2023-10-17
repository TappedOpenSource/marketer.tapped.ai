/* eslint-disable sonarjs/cognitive-complexity */
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 15,
  },
  header2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15,
  },
  text: {
    marginBottom: 10,
  },
  bulletList: {
    marginBottom: 5,
    paddingLeft: 50,
    paddingRight: 20,
  },
  numberList: {
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const PDFDocument = ({ content }) => {
  const tokens = md.parse(content, {});
  console.log(tokens);
  let listCounter = 1;
  let prevContent = '';

  return (
    <Document>
      <Page style={styles.page}>
        {tokens.map((token, index) => {
          if (token.type === 'heading_open') {
            if (token.tag === 'h1') {
              return <Text key={index} style={styles.header1}>{tokens[index + 1].content}</Text>;
            }
            if (token.tag === 'h3') {
              return <Text key={index} style={styles.header2}>{tokens[index + 1].content}</Text>;
            }
          }
          if (token.type === 'paragraph_open') {
            if (tokens[index + 1].content === prevContent) {
              return;
            } else {
              return <Text key={index} style={styles.text}>{tokens[index + 1].content}</Text>;
            }
          }
          if (token.type === 'ordered_list_open') {
            listCounter = 1;
          }
          if (token.type === 'list_item_open') {
            let listItemContent;
            if (token.markup === '-') {
              listItemContent = `• ${tokens[index + 2].content}`;
              prevContent = tokens[index + 2].content;
            } else if (token.markup === '.') {
              listItemContent = `${listCounter}. ${tokens[index + 2].content}`;
              listCounter += 1;
              prevContent = tokens[index + 2].content;
            }
            return <View key={index}><Text style={token.markup === '-' ? styles.bulletList : styles.numberList}>{listItemContent}</Text></View>;
          }
          return null;
        })}
      </Page>
    </Document>
  );
};


export default PDFDocument;
